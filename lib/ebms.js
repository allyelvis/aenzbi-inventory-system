import axios from 'axios';

const EBMS_BASE_URL = 'https://ebms.obr.gov.bi:9443/ebms_api';
const BEARER_TOKEN = 'your-bearer-token';

export async function addInvoice(invoiceData) {
  const response = await axios.post(`${EBMS_BASE_URL}/addInvoice`, invoiceData, {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
    },
  });
  return response.data;
}
