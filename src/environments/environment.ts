declare const process: any;

export const environment = {
  production: false,
  gtmId: 'GTM-KVLRVX5R',
  apiUrl: 'http://localhost:3000',
  recaptcha: {
    siteKey: '6Lc9WxUrAAAAALW7ZdOyxL_GFYXo5Vla9db80OEP', // Replace with your reCAPTCHA site key
  },
  emailJs: {
    publicKey: process.env['EMAILJS_PUBLIC_KEY'] || 'dmJ6QufZkwlNw4xIx',
    serviceId: process.env['EMAILJS_SERVICE_ID'] || 'service_qeij7yj',
    templateId: process.env['EMAILJS_TEMPLATE_ID'] || 'template_du2agy5',
  },
};
