import { dbGet, getFlowByUID } from '../../CRUD/get-flows.js';

getFlowByUID(localStorage.getItem('currentUser'));
