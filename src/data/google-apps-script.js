// =============================================================================
// EDGEHOLME — Google Apps Script
// Paste this entire script into your Apps Script editor and redeploy.
// Sheet: https://docs.google.com/spreadsheets/d/1TCaAnpi06_KIQb41mCKdMXxg1m9-tewix9JRKmeC9xI
// =============================================================================

function doPost(e) {
  try {
    const ss     = SpreadsheetApp.openById('1TCaAnpi06_KIQb41mCKdMXxg1m9-tewix9JRKmeC9xI');
    const params = e.parameter;
    const type   = params.formType || 'contact';
    const ts     = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' });

    if (type === 'trade') {
      // — Trade Customer tab
      const sheet = ss.getSheetByName('Trade Customer');
      if (sheet.getLastRow() === 0) {
        sheet.appendRow([
          'Email', 'Timestamp', 'Company', 'Contact Name',
          'Phone', 'Website', 'Business Type', 'Annual Volume', 'Comments'
        ]);
      }
      sheet.appendRow([
        params.email       || '',
        ts,
        params.company     || '',
        params.contact     || '',
        params.phone       || '',
        params.website     || '',
        params.business_type || '',
        params.annual_volume || '',
        params.comments    || '',
      ]);

    } else if (type === 'founding') {
      // — Founding Trade Member tab
      const sheet = ss.getSheetByName('Founding Trade Member');
      if (sheet.getLastRow() === 0) {
        sheet.appendRow([
          'Email', 'Timestamp', 'Company', 'Contact Name',
          'Phone', 'Website', 'Business Type', 'Annual Volume', 'Comments'
        ]);
      }
      sheet.appendRow([
        params.email         || '',
        ts,
        params.company       || '',
        params.contact       || '',
        params.phone         || '',
        params.website       || '',
        params.business_type || '',
        params.annual_volume || '',
        params.comments      || '',
      ]);

    } else {
      // — Contact tab (newsletter, notify me, contact forms)
      const sheet = ss.getSheetByName('Contact');
      if (sheet.getLastRow() === 0) {
        sheet.appendRow([
          'Email', 'Timestamp', 'Name', 'Subject', 'Message', 'Source'
        ]);
      }
      sheet.appendRow([
        params.email   || '',
        ts,
        params.name    || '',
        params.subject || '',
        params.message || '',
        params.source  || 'newsletter',
      ]);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle preflight GET (keeps the deploy happy)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ result: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
