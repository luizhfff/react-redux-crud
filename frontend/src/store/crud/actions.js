export const GET_ALL_COMPANIES = 'GET_ALL_COMPANIES';
export const getAllCompanies = () => {
  return {
    type: GET_ALL_COMPANIES,
  };
};

export const UPDATE_COMPANIES = 'UPDATE_COMPANIES';
export const updateCompanies = (companies) => {
  return {
    type: UPDATE_COMPANIES,
    companies,
  };
};

export const UPDATE_COMPANY = 'UPDATE_COMPANY';
export const updateCompany = (companyId, newCompany) => {
  return {
    type: UPDATE_COMPANY,
    companyId,
    newCompany,
  };
};

export const UPDATE_COMPANY_SUCCESS = 'UPDATE_COMPANY_SUCCESS';
export const updateCompanySuccess = () => {
  return {
    type: UPDATE_COMPANY_SUCCESS,
  };
};

export const UPDATE_COMPANY_ERROR = 'UPDATE_COMPANY_ERROR';
export const updateCompanyError = (error) => {
  return {
    type: UPDATE_COMPANY_ERROR,
    error,
  };
};

export const CREATE_PERSON = 'CREATE_PERSON';
export const createPerson = (person) => {
  return {
    type: CREATE_PERSON,
    person,
  };
};

export const CREATE_PERSON_SUCCESS = 'CREATE_PERSON_SUCCESS';
export const createPersonSuccess = (response) => {
  return {
    type: CREATE_PERSON_SUCCESS,
    response,
  };
};

export const CREATE_PERSON_ERROR = 'CREATE_PERSON_ERROR';
export const createPersonError = (error) => {
  return {
    type: CREATE_PERSON_ERROR,
    error,
  };
};

export const CREATE_COMPANY = 'CREATE_COMPANY';
export const createCompany = (company) => {
  return {
    type: CREATE_COMPANY,
    company,
  };
};

export const CREATE_COMPANY_SUCCESS = 'CREATE_COMPANY_SUCCESS';
export const createCompanySuccess = (response) => {
  return {
    type: CREATE_COMPANY_SUCCESS,
    response,
  };
};

export const CREATE_COMPANY_ERROR = 'CREATE_COMPANY_ERROR';
export const createCompanyError = (error) => {
  return {
    type: CREATE_COMPANY_ERROR,
    error,
  };
};

export const UPDATE_PERSON = 'UPDATE_PERSON';
export const updatePerson = (personId, newPerson) => {
  return {
    type: UPDATE_PERSON,
    personId,
    newPerson,
  };
};

export const UPDATE_PERSON_SUCCESS = 'UPDATE_PERSON_SUCCESS';
export const updatePersonSuccess = () => {
  return {
    type: UPDATE_PERSON_SUCCESS,
  };
};

export const UPDATE_PERSON_ERROR = 'UPDATE_PERSON_ERROR';
export const updatePersonError = (error) => {
  return {
    type: UPDATE_PERSON_ERROR,
    error,
  };
};

export const DELETE_PERSON = 'DELETE_PERSON';
export const deletePerson = (personId) => {
  return {
    type: DELETE_PERSON,
    personId,
  };
};

export const DELETE_PERSON_SUCCESS = 'DELETE_PERSON_SUCCESS';
export const deletePersonSuccess = () => {
  return {
    type: DELETE_PERSON_SUCCESS,
  };
};

export const DELETE_PERSON_ERROR = 'DELETE_PERSON_ERROR';
export const deletePersonError = (error) => {
  return {
    type: DELETE_PERSON_ERROR,
    error,
  };
};
