import { LegalDocument, LegalSection } from "@/components/legal/legal-document";
import { siteConfig } from "@/lib/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms for ${siteConfig.name}.`,
  alternates: { canonical: "/terms" },
};

const CONTACT_EMAIL = "[Contact email]";
const LEGAL_ENTITY = "[NextU legal entity name]";
const BUSINESS_ADDRESS = "[Business address]";
const GOVERNING_LAW = "[Governing law / jurisdiction — to be confirmed]";

export default function TermsPage() {
  return (
    <LegalDocument title="Terms of Service" lastUpdated="September 26, 2025">
      <LegalSection title="1. Introduction">
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of the
          {siteConfig.name} website at {siteConfig.url} (the &quot;Site&quot;) operated by{" "}
          {LEGAL_ENTITY} (&quot;NextU,&quot; &quot;we,&quot; &quot;us&quot;).
        </p>
        <p>
          By using the Site, you agree to these Terms. If you do not agree, please do not
          use the Site. These Terms have not been reviewed by legal counsel.
        </p>
      </LegalSection>

      <LegalSection title="2. About NextU">
        <p>
          NextU is an expert discovery and connection platform focused on Life Design
          &amp; Transformation. We help users describe what they need and facilitate
          introductions to independent professionals. NextU is not a booking platform,
          payment processor, or provider of professional advice through the Site itself.
        </p>
      </LegalSection>

      <LegalSection title="3. Use of the Website">
        <p>
          You agree to use the Site lawfully and not to misuse, disrupt, or attempt
          unauthorized access to our systems. You must provide accurate information to the
          extent you choose to submit details through forms or messages.
        </p>
      </LegalSection>

      <LegalSection title="4. Expert Connections">
        <p>
          Experts referenced or connected through NextU are independent professionals, not
          employees or agents of NextU unless explicitly stated otherwise. Any engagement,
          fees, scheduling, or services are between you and the expert.
        </p>
      </LegalSection>

      <LegalSection title="5. No Professional Relationship">
        <p>
          Information on the Site is for general informational purposes. Using the Site
          does not create a medical, legal, financial, therapeutic, or other professional
          relationship between you and NextU. Always seek qualified advice for your
          specific situation.
        </p>
      </LegalSection>

      <LegalSection title="6. User Responsibilities">
        <p>
          You are responsible for your communications, decisions, and interactions with
          experts. Do not use the Site for unlawful, harmful, or fraudulent purposes.
        </p>
      </LegalSection>

      <LegalSection title="7. WhatsApp Communication">
        <p>
          If you choose to continue on WhatsApp, you use a third-party messaging service
          subject to its own terms. NextU does not control WhatsApp and is not responsible
          for message delivery, availability, or content once you leave the Site.
        </p>
      </LegalSection>

      <LegalSection title="8. Intellectual Property">
        <p>
          The Site, branding, content, and materials are owned by NextU or its licensors
          and protected by applicable intellectual property laws. You may not copy,
          modify, or distribute our materials without permission.
        </p>
      </LegalSection>

      <LegalSection title="9. Third-Party Links / Services">
        <p>
          The Site may reference third-party websites or services. We are not responsible
          for their content, policies, or practices.
        </p>
      </LegalSection>

      <LegalSection title="10. Disclaimers">
        <p>
          The Site is provided on an &quot;as is&quot; and &quot;as available&quot; basis.
          We do not guarantee specific outcomes, expert availability, response times,
          quality of experts, or that any expert will meet your expectations.
        </p>
      </LegalSection>

      <LegalSection title="11. Limitation of Liability">
        <p>
          To the fullest extent permitted by law, NextU and its affiliates will not be
          liable for indirect, incidental, special, consequential, or punitive damages,
          or any loss arising from your use of the Site or interactions with experts.
        </p>
      </LegalSection>

      <LegalSection title="12. Privacy">
        <p>
          Our collection and use of information is described in our{" "}
          <a href="/privacy" className="font-medium text-cobalt hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="13. Changes to Terms">
        <p>
          We may update these Terms from time to time. Continued use after changes become
          effective constitutes acceptance of the updated Terms.
        </p>
      </LegalSection>

      <LegalSection title="14. Governing Law">
        <p>{GOVERNING_LAW}</p>
      </LegalSection>

      <LegalSection title="15. Contact Information">
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
