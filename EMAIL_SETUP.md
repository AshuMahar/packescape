# PackEscape - Setup Guide for Email Notifications

## Email Configuration (EmailJS)

Your website now captures customer enquiries and can send them to **packescapeindia@gmail.com**. Here's how to enable it:

### Step 1: Create EmailJS Account
1. Visit [https://www.emailjs.com](https://www.emailjs.com)
2. Sign up with your email (free tier available)
3. Verify your email

### Step 2: Connect Gmail Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add Service**
3. Select **Gmail**
4. Connect your Gmail account (packescapeindia@gmail.com)
5. Copy the **Service ID** (should be `service_packescape`)

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Set name to: `template_packescape`
4. Configure the template:
   - **Subject**: `New Enquiry from {{from_name}}`
   - **Body** (use these variables):
     ```
     Name: {{from_name}}
     Email: {{from_email}}
     Phone: {{phone}}
     Destination: {{destination}}
     
     Message:
     {{message}}
     ```
5. Click **Save**

### Step 4: Get Your Public Key
1. Go to **Account Settings** → **API Keys**
2. Copy your **Public Key**

### Step 5: Update .env File
1. Open `.env` file in your project
2. Replace `VITE_EMAILJS_PUBLIC_KEY` with your public key:
   ```
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   VITE_EMAILJS_SERVICE_ID=service_packescape
   VITE_EMAILJS_TEMPLATE_ID=template_packescape
   VITE_ADMIN_EMAIL=packescapeindia@gmail.com
   ```

### Step 6: Rebuild & Deploy
```bash
npm run build
git add .
git commit -m "Update EmailJS configuration"
git push origin main
```

Netlify will automatically redeploy!

---

## Admin Panel Features (ashumahar/sky6677)

Login to your admin panel to:
- ✅ **Edit Homepage**: Change title, subtitle, hero background image
- ✅ **Edit Footer**: Update description, phone, email
- ✅ **Manage Tours**: Add, edit, delete tour packages
- ✅ **View Enquiries**: See all customer enquiries in real-time
- ✅ **Edit Contact Info**: Update phone and email displayed on site

All changes are saved automatically to your browser's storage!

---

## Testing Email Functionality

1. Visit your deployed site on Netlify
2. Click "Plan Custom Trip" or any tour's "View Details"
3. Fill in the form with test details
4. Submit - you should see "Request Sent!" message
5. Check packescapeindia@gmail.com inbox within 1 minute
6. Email will contain all enquiry details

---

## Troubleshooting

**Emails not arriving?**
- Verify public key is correct in `.env`
- Check spam folder in Gmail
- Ensure template variables match exactly
- Test through EmailJS dashboard first

**Enquiry not showing in admin panel?**
- Admin panel shows enquiries in browser only
- Data stored in localStorage
- Clear cache if issues persist

---

**Your website is now fully functional and ready for production!** 🚀
