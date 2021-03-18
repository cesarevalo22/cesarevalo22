import React, { useEffect, useReducer, useState } from 'react'
import { SET_LANGUAGE, UPDATE_TRANSLATE } from '../../types/TranslationTypes';
import { TranslationContext, initialState } from './TranslationContext';
import TranslationReducer from './TranslationReducer';
import axios from 'axios';
import WarningMessage from '../../components/commons/warningMessage/warningMessage';
import { TRANSLATION_ERROR_MESSAGES } from '../../components/commons/warningMessage/messages';
import { CircularProgress } from '@material-ui/core';

const TranslationState = (props) => {
  const [state, dispatch] = useReducer(TranslationReducer, initialState)
  const [openWarningMessage, setOpenWarningMessage] = useState(false);
  const [onError, setOnError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    let lng = localStorage.getItem('lng');
    let lngData = localStorage.getItem('lng-data');
    let lngExpiry = localStorage.getItem('lng-expiry');

    if(lngExpiry) {
      const now = new Date();
      if(now.getTime() > lngExpiry) {
        localStorage.removeItem('lng');
        localStorage.removeItem('lng-data');
        localStorage.removeItem('lng-expiry');
        lng = null;
        lngData = null;
        lngExpiry = null;
      }
    }

    if(!lng && !lngData) {
      fetchTranslate();
    } else {
      let translateObject = JSON.parse(lngData);
      if(translateObject[lng]) {
        setOnError(false);
        setLoading(false);
        setLanguage(lng)
        updateTranslate(JSON.parse(lngData))
      } else {
        setLoading(false);
        executeError()
      }
    }
  }, [])

  const executeError = () => {
    setOnError(true);
    setOpenWarningMessage(true);
    localStorage.removeItem('lng');
    localStorage.removeItem('lng-data');
    localStorage.removeItem('lng-expiry');
  }

  const fetchTranslate = async () => {
    axios.get(
      `${process.env.REACT_APP_GATEWAY_END_POINT}/adwindow/details/public`)
    .then((response) => {
      if(response.data.details > 0) {
        const now = new Date();
        setOnError(false);
        setLoading(false);
        updateTranslate(response.data.body)
        localStorage.setItem('lng', state.langCode);
        localStorage.setItem('lng-data', JSON.stringify(response.data.body))
        localStorage.setItem('lng-expiry', now.setHours(now.getHours() + 2))
      } else {
        setLoading(false);
        executeError()
      }
    })
    .catch((error) => {
      console.error(error);
      setLoading(false);
      executeError()
    });
  }

  const setLanguage = (langCode) => {
    dispatch({
      type: SET_LANGUAGE,
      payload: langCode,
    })
  }

  const updateTranslate = arrayTranslate => {
    dispatch({
      type: UPDATE_TRANSLATE,
      payload: arrayTranslate
    })
  }

  const handleWarningMessage = () => {
    setOpenWarningMessage(!openWarningMessage);
    window.location.reload();
  };

  return (
    <TranslationContext.Provider
      value={{
        langCode: state.langCode,
        translate: state.translate,
        setLanguage,
        updateTranslate
      }}
    >

      {loading && (
        <div>
          <CircularProgress size={68}/>
        </div>
      )}

      {!loading && (
        <>
        { onError && (
        <WarningMessage
            open={openWarningMessage}
            onClose={handleWarningMessage}
            message1={TRANSLATION_ERROR_MESSAGES.title}
            message2={TRANSLATION_ERROR_MESSAGES.message}
          />
        )}
        { !onError && (
          <>
            {props.children}
          </>
        )}
        </>
      )}
    </TranslationContext.Provider>
  )
}

export default TranslationState
