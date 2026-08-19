import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import React from 'react';

export default function Home() {
  return (
    <div>
      <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Privacy Policy - 3Sual</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        h1 {
            color: #1a1a1a;
            border-bottom: 2px solid #eaeaea;
            padding-bottom: 10px;
        }
        h2 {
            color: #2c3e50;
            margin-top: 24px;
            margin-bottom: 12px;
        }
        p, li {
            font-size: 16px;
        }
        ul {
            padding-left: 20px;
        }
        li {
            margin-bottom: 8px;
        }
        .date {
            font-style: italic;
            color: #666666;
            margin-bottom: 20px;
        }
        .contact-info {
            background-color: #f9f9f9;
            padding: 15px;
            border-left: 4px solid #2c3e50;
            margin-top: 10px;
        }
    </style>
</head>
<body>

    <h1>Privacy Policy for 3Sual</h1>
    <p class="date"><strong>Last Updated:</strong> August 18, 2026</p>

    <p>This Privacy Policy explains how <strong>3Sual</strong> collects, uses, and protects information when you use the <strong>3Sual</strong> mobile application (the "App").</p>
    <p>3Sual committed to respecting your privacy and ensuring transparency regarding how data is handled within the App. By downloading and using 3Sual, you consent to the practices described in this Privacy Policy.</p>

    <h2>1. Information Collection and Third-Party Services</h2>
    <p>3Sual is designed to minimize personal data collection. 3Sual do not require you to create an account, nor do 3Sual actively collect or sell personally identifiable information (such as your name, address, or physical contact details).</p>
    <p>However, to ensure app stability, improve performance, and understand user interaction, 3Sual utilizes <strong>Google Firebase</strong>, a cloud service provided by Google LLC.</p>

    <p><strong>Firebase Analytics &amp; Performance Data</strong></p>
    <p>Firebase collects non-personal, statistical, and usage-related data automatically through standard device identifiers. This information includes:</p>
    <ul>
        <li><strong>Device Details:</strong> Device model, operating system version, brand, and unique instance identifiers (such as the Advertising ID or App Instance ID).</li>
        <li><strong>Usage Statistics:</strong> App launches, screen views, feature interactions, session durations, and user flow within the App.</li>
        <li><strong>Performance Metrics:</strong> App response times, network telemetry, and crash diagnostics (e.g., Firebase Crashlytics stack traces).</li>
    </ul>
    <p>Google Analytics for Firebase processes this data on my behalf in an aggregated and pseudonymous manner. To learn more about how Google processes and protects this data, please review Google's Privacy &amp; Terms.</p>

    <h2>2. How Your Information Is Used</h2>
    <p>The statistical and performance metrics collected via Firebase are used strictly for the following operational purposes:</p>
    <ul>
        <li><strong>App Improvement:</strong> Analyzing usage patterns to enhance user interface, content, and features.</li>
        <li><strong>Technical Maintenance:</strong> Identifying, diagnosing, and fixing technical bugs, app crashes, or performance bottlenecks.</li>
        <li><strong>Security &amp; Integrity:</strong> Ensuring app integrity and protecting against malicious usage or service degradation.</li>
    </ul>
    <p>3Sual <strong>do not</strong> use this data to profile users, sell data to third-party data brokers, or deliver targeted advertising.</p>

    <h2>3. Data Sharing &amp; Third Parties</h2>
    <p>3Sual does not sell, trade, or rent any user data to third parties. Data processed through 3Sual is only shared under the following limited circumstances:</p>
    <ul>
        <li><strong>Service Providers:</strong> As described above, aggregated usage data is processed through Google Firebase infrastructure strictly to assist in operating and analyzing the App.</li>
        <li><strong>Legal Compliance:</strong> 3Sual may disclose collected information if required to do so by applicable law, regulation, legal process, or governmental request.</li>
    </ul>

    <h2>4. Children &amp; General Audience</h2>
    <p>3Sual is a general audience application and does not enforce strict age restrictions.</p>
    <p>The App does not knowingly solicit or collect personally identifiable information from children under 13 (or under 16/18 depending on local laws).</p>
    <p>Because data collection via Firebase is limited to non-personal usage statistics and technical metrics, children may browse and use the App safely.</p>
    <p>If you are a parent or legal guardian and believe that personal data from a child has been inadvertently submitted through the App, please contact me immediately at <a href="mailto:elsenalmasli@gmail.com">elsenalmasli@gmail.com</a>, and 3Sual will take prompt steps to remove any such information.</p>

    <h2>5. Data Security</h2>
    <p>Data security is a priority. Technical metrics collected by Firebase are safeguarded using industry-standard security measures, including data encryption in transit (HTTPS/TLS) and restricted server-level access managed by Google's infrastructure. While no mobile transmission or storage method is 100% secure, 3Sual strive to use commercially acceptable means to protect information.</p>

    <h2>6. User Choice &amp; Opt-Out</h2>
    <p>You can control or limit data collection through your mobile device's operating system settings:</p>
    <ul>
        <li><strong>Limit Ad Tracking:</strong> You can reset or limit access to your device’s advertising ID via your mobile device's settings menu (e.g., <em>Settings &gt; Privacy &gt; Advertising</em> on Android).</li>
        <li><strong>App Permissions:</strong> You can review and modify any app permissions granted to 3Sual directly through your device settings at any time.</li>
    </ul>

    <h2>7. Jurisdiction &amp; Governing Law</h2>
    <p>This Privacy Policy and any matters related to data protection are governed by and construed in accordance with the laws of <strong>Azerbaijan</strong>.</p>

    <h2>8. Changes to This Privacy Policy</h2>
    <p>3Sual reserve the right to update this Privacy Policy periodically to reflect changes in app functionality, third-party services, or legal obligations. Any updates will be published on this page with an updated "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.</p>

    <h2>9. Contact Information</h2>
    <p>If you have any questions, concerns, or privacy inquiries regarding this policy or the 3Sual app, please reach out directly:</p>
    <div class="contact-info">
        <p><strong>App Name:</strong> 3Sual</p>
        <p><strong>Developer:</strong> 3Sual</p>
        <p><strong>Email:</strong> <a href="mailto:elsenalmasli@gmail.com">elsenalmasli@gmail.com</a></p>
    </div>

</body>
    </div>
  );
}
