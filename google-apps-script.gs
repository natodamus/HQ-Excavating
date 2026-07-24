const SHEET_ID = "PASTE_GOOGLE_SHEET_ID";
const SHEET_NAME = "Leads";
const BUSINESS_EMAIL = "PASTE_BUSINESS_EMAIL";
const BUSINESS_NAME = "High Quality Excavating INC";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);

    sheet.appendRow([
      new Date(),
      data.name || "",
      data.phone || "",
      data.email || "",
      data.town || "",
      data.service || "",
      data.details || "",
      "New"
    ]);

    MailApp.sendEmail({
      to: BUSINESS_EMAIL,
      subject: `New estimate request: ${data.service || "Project"}`,
      htmlBody: `
        <h2>New website lead</h2>
        <p><strong>Name:</strong> ${data.name || ""}</p>
        <p><strong>Phone:</strong> ${data.phone || ""}</p>
        <p><strong>Email:</strong> ${data.email || ""}</p>
        <p><strong>Town:</strong> ${data.town || ""}</p>
        <p><strong>Service:</strong> ${data.service || ""}</p>
        <p><strong>Details:</strong><br>${data.details || ""}</p>
      `
    });

    if (data.email) {
      MailApp.sendEmail({
        to: data.email,
        subject: `We received your request — ${BUSINESS_NAME}`,
        htmlBody: `
          <p>Hi ${data.name || "there"},</p>
          <p>Thank you for contacting ${BUSINESS_NAME}. We received your estimate request and will follow up to discuss the project.</p>
          <p><strong>Project:</strong> ${data.service || "Excavation work"} in ${data.town || "your area"}</p>
          <p>— ${BUSINESS_NAME}</p>
        `
      });
    }

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
