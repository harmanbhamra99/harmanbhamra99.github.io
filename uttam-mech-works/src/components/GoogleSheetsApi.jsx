import { google } from 'googleapis';

const authorize = async () => {
    // Load credentials from the JSON key file
    const credentials = require('../credentials/web-dev-project-407300-8d2f022b92c0.json');
  
    // Create an instance of GoogleAuth using the provided credentials and scopes
    const auth = await new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
  
    return google.sheets({ version: 'v4', auth });
  };

const fetchData = async () => {
    // Authorize and obtain the Google Sheets API client
    const sheets = await authorize();
    
    // Make a request to the Google Sheets API to get values from the specified range
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: '1u5yhzFnc93oZMvgQj1wM77e_4d-_uxCWgSssKg0gC08',
      range: 'Sheet1!A1:E999', // Adjust based on your sheet structure
    });
  
    // Extract and log the rows (data) from the API response
    const rows = response.data.values;
    console.log(rows);
  };
  
export {authorize, fetchData};