import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Terms and Conditions</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
        }
        h1 {
            margin-top: 0;
        }
        ol {
            margin-bottom: 20px;
        }
        li {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <h1>Terms and Conditions for App Collecting Firebase Statistics Data:</h1>
    <ol>
        <li><strong>Agreement:</strong> By using our app and allowing Firebase statistics data collection, you agree to comply with these terms and conditions.</li>
        <li><strong>Data Collection:</strong> Our app utilizes Firebase services to collect non-personal statistical data, including device information, app usage statistics, and performance metrics.</li>
        <li><strong>Data Usage:</strong> The statistical data collected by Firebase is used solely for analyzing app performance, improving user experience, and enhancing app functionality.</li>
        <li><strong>Data Security:</strong> We prioritize the security and privacy of your data. Firebase employs industry-standard security measures to protect the collected statistical data against unauthorized access or misuse.</li>
        <li><strong>Data Sharing:</strong> We do not share the collected statistical data with third parties for marketing or advertising purposes. However, aggregated and anonymized data may be shared for analytical purposes.</li>
        <li><strong>User Responsibilities:</strong> Users are responsible for ensuring that their use of our app complies with applicable laws and regulations. Users could not upload any personal data or sensitive information to our app.</li>
        <li><strong>Service Availability:</strong> While we strive to maintain uninterrupted access to our app and Firebase services, we cannot guarantee continuous availability. Temporary suspensions or interruptions may occur for maintenance or technical reasons.</li>
        <li><strong>Limitation of Liability:</strong> We shall not be liable for any damages arising from the use or inability to use our app or Firebase services. This includes but is not limited to direct, indirect, incidental, consequential, or punitive damages.</li>
        <li><strong>Changes to Terms:</strong> We reserve the right to modify these terms and conditions at any time. Users will be notified of any changes, and continued use of our app constitutes acceptance of the modified terms.</li>
        <li><strong>Termination:</strong> We reserve the right to terminate or suspend access to our app and Firebase services at any time, with or without cause, and without prior notice.</li>
        <li><strong>Governing Law:</strong> These terms and conditions are governed by the laws of the jurisdiction where our app operates.</li>
        <li><strong>Contact Information:</strong> For questions or concerns regarding these terms and conditions, users may contact our support team.</li>
    </ol>
    <p>By using our app and allowing Firebase statistics data collection, you acknowledge that you have read, understood, and agree to abide by these terms and conditions.</p>
</body>

  )
}
