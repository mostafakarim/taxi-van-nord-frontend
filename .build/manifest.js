
import App from '../src/views/App';

export * from '@stripe/ui-extension-sdk/version';
export const BUILD_TIME = '2024-03-12 13:56:56.490139 +0100 CET m=+14.735698214';

export { 
  App	
 };

export default {
  "id": "com.example.taxi-van-nord",
  "version": "0.0.1",
  "name": "Taxi Van Nord",
  "icon": "",
  "permissions": [],
  "ui_extension": {
    "views": [
      {
        "viewport": "stripe.dashboard.customer.detail",
        "component": "App"
      }
    ],
    "content_security_policy": {
      "connect-src": null,
      "image-src": null,
      "purpose": ""
    }
  }
};
