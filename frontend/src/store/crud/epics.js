import { combineEpics, ofType } from 'redux-observable';
import { withLatestFrom, mergeMap } from 'rxjs/operators';
import {
  createCompanyError,
  createCompanySuccess,
  createPersonError,
  createPersonSuccess,
  CREATE_COMPANY,
  CREATE_PERSON,
  deletePersonError,
  deletePersonSuccess,
  DELETE_PERSON,
  GET_ALL_COMPANIES,
  updateCompanies,
  updateCompanyError,
  updateCompanySuccess,
  updatePersonError,
  updatePersonSuccess,
  UPDATE_COMPANY,
  UPDATE_PERSON,
} from './actions';
import axios from 'axios';

const getAllCompaniesEpic = (action$, state$) =>
  action$.pipe(
    ofType(GET_ALL_COMPANIES),
    withLatestFrom(state$),
    mergeMap(async ([action, state]) => {
      try {
        const data = await axios.get('http://localhost:3001/companies');
        return updateCompanies(data?.data);
      } catch (error) {
        return console.error(error);
      }
    })
  );

const createCompanyEpic = (action$, state$) =>
  action$.pipe(
    ofType(CREATE_COMPANY),
    withLatestFrom(state$),
    mergeMap(async ([action, state]) => {
      try {
        const data = await axios.post('http://localhost:3001/companies', action.company);
        return createCompanySuccess(data);
      } catch (error) {
        console.error(error);
        return createCompanyError(error);
      }
    })
  );

const updateCompanyEpic = (action$, state$) =>
  action$.pipe(
    ofType(UPDATE_COMPANY),
    withLatestFrom(state$),
    mergeMap(async ([action, state]) => {
      try {
        const data = await axios.put(`http://localhost:3001/companies/${action.companyId}`, action.newCompany);
        return updateCompanySuccess(data);
      } catch (error) {
        console.error(error);
        return updateCompanyError(error);
      }
    })
  );

const createPersonEpic = (action$, state$) =>
  action$.pipe(
    ofType(CREATE_PERSON),
    withLatestFrom(state$),
    mergeMap(async ([action, state]) => {
      try {
        const data = await axios.post('http://localhost:3001/person', action.person);
        return createPersonSuccess(data);
      } catch (error) {
        console.error(error);
        return createPersonError(error);
      }
    })
  );

const updatePersonEpic = (action$, state$) =>
  action$.pipe(
    ofType(UPDATE_PERSON),
    withLatestFrom(state$),
    mergeMap(async ([action, state]) => {
      try {
        const data = await axios.put(`http://localhost:3001/person/${action.personId}`, action.newPerson);
        return updatePersonSuccess(data);
      } catch (error) {
        console.error(error);
        return updatePersonError(error);
      }
    })
  );

  const deletePersonEpic = (action$, state$) =>
  action$.pipe(
    ofType(DELETE_PERSON),
    withLatestFrom(state$),
    mergeMap(async ([action, state]) => {
      try {
        const data = await axios.delete(`http://localhost:3001/person/${action.personId}`);
        return deletePersonSuccess(data);
      } catch (error) {
        console.error(error);
        return deletePersonError(error);
      }
    })
  );

const CrudEpics = combineEpics(
  getAllCompaniesEpic,
  createCompanyEpic,
  createPersonEpic,
  updateCompanyEpic,
  updatePersonEpic,
  deletePersonEpic
);

export default CrudEpics;
