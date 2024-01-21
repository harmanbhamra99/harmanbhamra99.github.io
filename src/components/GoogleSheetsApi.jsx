import axios from 'axios';

const SPREADSHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRXPTZuKECx_mQUM_hGTrTsKli1nNA3-PMahbkuU9cZrnoXg83WXBaaChoc9AzjmETHRs6V1IwSCi5w/pub?gid=1207607618&single=true&output=csv';

const FetchCSVData = async () => {
  try {
    const response = await axios.get(SPREADSHEET_URL);
    const sheetData = response.data;

    return sheetData;
  } catch (error) {
    console.error('Error fetching data from Google Sheet:', error);
    throw error;
  }
};

export default FetchCSVData;
