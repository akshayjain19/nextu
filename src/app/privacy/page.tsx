import { LegalDocument, LegalSection } from "@/components/legal/legal-document";
import { siteConfig } from "@/lib/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}.`,
  alternates: { canonical: "/privacy" },
};

const CONTACT_EMAIL = "[Contact email]";
const LEGAL_ENTITY = "[NextU legal entity name]";
const BUSINESS_ADDRESS = "[Business address]";

export default function PrivacyPage() {
  return (
    <LegalDocument title="Privacy Policy" lastUpdated="September 26, 2025">
      <LegalSection title="1. Introduction">
        <p>
          This Privacy Policy describes how {LEGAL_ENTITY} (&quot;NextU,&quot; &quot;we,&quot;
          &quot;us&quot;) collects, uses, and shares information when you visit{" "}
          {siteConfig.url} or use our expert discovery and connection services (the
          &quot;Service&quot;).
        </p>
        <p>
          This policy is provided for transparency about our current V1 website. It has
          not been reviewed by legal counsel and should be updated before large-scale
          data processing.
        </p>
      </LegalSection>

      <LegalSection title="2. Information We Collect">
        <p>
          We may collect information you choose to provide, information generated through
          your use of the website, and limited technical data from your device and browser.
        </p>
      </LegalSection>

      <LegalSection title="3. Information You Provide">
        <p>
          When you use the lead form or contact us, you may provide details such as the
          type of expert you are looking for, a description of your need, and optionally
          your name. If you continue to WhatsApp, you may send additional information in
          your message.
        </p>
        <p>We do not require account registration for the current V1 experience.</p>
      </LegalSection>

      <LegalSection title="4. How We Use Information">
        <p>We use information to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Understand your request and help connect you with relevant expertise</li>
          <li>Operate, maintain, and improve the website</li>
          <li>Respond to inquiries and communicate with you</li>
          <li>Monitor security, prevent abuse, and comply with applicable law</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. WhatsApp / Communication">
        <p>
          Choosing &quot;Continue on WhatsApp&quot; opens WhatsApp (a third-party service)
          with a pre-filled message. Your use of WhatsApp is subject to WhatsApp&apos;s
          terms and privacy practices. Messages you send are handled according to
          WhatsApp and your device settings.
        </p>
      </LegalSection>

      <LegalSection title="6. Cookies and Analytics">
        <p>
          We may use cookies or similar technologies for essential site functionality and
          basic analytics (for example, understanding how visitors use pages). You can
          control cookies through your browser settings where applicable.
        </p>
      </LegalSection>

      <LegalSection title="7. Sharing of Information">
        <p>
          We do not sell your personal information. We may share information with service
          providers who help us operate the website, when required by law, or to protect
          rights and safety. Expert matching may involve sharing relevant details with
          independent professionals in our network as needed to respond to your request.
        </p>
      </LegalSection>

      <LegalSection title="8. Data Security">
        <p>
          We use reasonable administrative and technical measures designed to protect
          information. No method of transmission or storage is completely secure.
        </p>
      </LegalSection>

      <LegalSection title="9. Data Retention">
        <p>
          We retain information only as long as needed for the purposes described in this
          policy, unless a longer period is required by law.
        </p>
      </LegalSection>

      <LegalSection title="10. Third-Party Services">
        <p>
          The website may link to or integrate third-party services (including WhatsApp and
          hosting providers). Their privacy practices govern information they collect
          independently.
        </p>
      </LegalSection>

      <LegalSection title="11. Your Rights">
        <p>
          Depending on your location, you may have rights to access, correct, delete, or
          restrict certain processing of your personal information. To make a request,
          contact us using the details below.
        </p>
      </LegalSection>

      <LegalSection title="12. Children's Privacy">
        <p>
          The Service is not directed to children under 13 (or the minimum age required in
          your jurisdiction). We do not knowingly collect personal information from
          children.
        </p>
      </LegalSection>

      <LegalSection title="13. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. We will post the updated
          version on this page and revise the &quot;Last updated&quot; date.
        </p>
      </LegalSection>

      <LegalSection title="14. Contact Us">
        <p>
          {LEGAL_ENTITY}
          <br />
          {BUSINESS_ADDRESS}
          <br />
          Email: {CONTACT_EMAIL}
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
