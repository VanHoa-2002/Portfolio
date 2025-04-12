declare const process: any;

export const environment = {
  production: true,
  gtmId: 'GTM-KVLRVX5R',
  apiUrl: 'https://your-api-url.com',
  recaptcha: {
    siteKey: '6Lc9WxUrAAAAALW7ZdOyxL_GFYXo5Vla9db80OEP', // Replace with your reCAPTCHA site key
  },
  emailJs: {
    publicKey: process.env['EMAILJS_PUBLIC_KEY'] || '',
    serviceId: process.env['EMAILJS_SERVICE_ID'] || '',
    templateId: process.env['EMAILJS_TEMPLATE_ID'] || '',
  },
};
