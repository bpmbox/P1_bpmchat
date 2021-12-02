import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { toast } from 'react-toastify';

const actions = {
  doNew: () => {
    return {
      type: 'BOOKS_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'BOOKS_FORM_FIND_STARTED',
      });

      axios.get(`/books/${id}`).then(res => {
        const record = res.data;

        dispatch({
          type: 'BOOKS_FORM_FIND_SUCCESS',
          payload: record,
        });
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'BOOKS_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/books'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'BOOKS_FORM_CREATE_STARTED',
      });

      axios.post('/books', { data: values }).then(res => {
        dispatch({
          type: 'BOOKS_FORM_CREATE_SUCCESS',
        });

        toast.success('Books created');
        dispatch(push('/admin/books'));
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'BOOKS_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: 'BOOKS_FORM_UPDATE_STARTED',
      });

      await axios.put(`/books/${id}`, {id, data: values});

      dispatch(doInit());

      dispatch({
        type: 'BOOKS_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        toast.success('Profile updated');
      } else {
        toast.success('Books updated');
        dispatch(push('/admin/books'));
      }
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'BOOKS_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
