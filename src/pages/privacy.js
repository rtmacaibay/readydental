import styled from '@emotion/styled';
import React from 'react';
import Layout from '../components/layout';
import TextLink from '../components/links/text-link';
import SEO from '../components/seo';
import { blogMenuLinks } from '../components/_config/menu-links';
import { StyledSection } from '../components/_shared/styled-section';

const Styled404Section = styled(StyledSection)`
  min-height: 100vh;
`;
const StyledTitle = styled.h1`
  margin-bottom: 15px;
  font-size: 40px;
`;
const StyledHeader = styled.h2`
  color: var(--primary-color);
  margin-bottom: 25px;
  font-size: px;
`;
const StyledSubheader = styled.h3`
  color: var(--primary-color);
  margin-bottom: 10px;
  font-size: 18px;
`;
const StyledDescription = styled.p`
  padding: 0 0.5rem;
  margin-bottom: 5px;
`;

const PrivacyPolicy = () => (
  <Layout menuLinks={blogMenuLinks}>
    <Styled404Section>
      <SEO title="Privacy Practices" />
      <StyledTitle>Notice of Privacy Practices</StyledTitle>
      <StyledDescription>This notice describes how your health information may be used and disclosed by Ready Dental and how you can get access to this information. Please review it carefully.</StyledDescription>
      <StyledHeader>Understanding Your Patient Health Information (PHI)</StyledHeader>
      <StyledDescription>We care about our patients’ privacy and strive to protect the confidentiality of your medical information at this practice. New federal legislation requires that we issue this official Notice of our privacy practices. You have the right to the confidentiality of your medical information, and this practice is required by law to maintain the privacy of that protected health information. This practice is required to abide by the terms of the Notice of Privacy Practices currently in effect, and to provide notice of its legal duties and privacy practices with respect to protected health information. If you have any questions about the Notice, please contact the Privacy Officer at this practice: KELLY JOHNSTON.</StyledDescription>
      <StyledHeader>How We May Use and Disclose Medical Information About You</StyledHeader>
      <StyledDescription>The following categories describe different ways that we may use and disclose medical information without your specific consent or authorization. Examples are provided for each category of uses or disclosures. Not every possible use or disclosure in a category is listed.</StyledDescription>
      <StyledSubheader>For Treatment</StyledSubheader>
      <StyledDescription>We may use medical information about you to provide you with medical treatment or services. Example: In treating you for a specific condition, we may need to know if you have allergies that could influence which medications we prescribe for the treatment process.</StyledDescription>
      <StyledSubheader>For Payment</StyledSubheader>
      <StyledDescription>We may use and disclose medical information about you so that the treatment and services you receive from us may be billed and payment may be collected from you, an insurance company, or a third party. Example: We may need need to send your PHI, such as your name, address, office visit date, and codes identifying your diagnosis and treatment to your insurance company for payment.</StyledDescription>
      <StyledSubheader>For Health Care Operations</StyledSubheader>
      <StyledDescription>We may use and disclose medical information about you for health care operation to assure that you receive quality care. Example: We may use medical information to review our treatment and services and evaluate the performance of our staff in caring for you.</StyledDescription>
      <StyledSubheader>Other Uses or Disclosures That Can Be Made Without Your Consent or Authorization</StyledSubheader>
      <StyledDescription><ul>
        <li>As required during an investigation by law enforcement agencies</li>
        <li>To avert a serious threat to public health or safety</li>
        <li>As required by military command authorities for their medical records</li>
        <li>To workers’ compensation or similar programs for processing of claims</li>
        <li>In response to a legal proceeding</li>
        <li>To a coroner or medical examiner for identification of a body</li>
        <li>If an inmate, to the correctional institution or law enforcement official</li>
        <li>As required by the US Food and Drug Administration (FDA)</li>
        <li>Other healthcare providers’ treatment activities</li>
        <li>Other covered entities’ and providers’ payment activities</li>
        <li>Other covered entities’ healthcare operations activities (to the extent permitted under HIPAA)</li>
        <li>Uses and disclosures required by law</li>
        <li>Uses and disclosures in domestic violence or neglect situations</li>
        <li>Health oversight activities</li>
        <li>Other public health activities</li>
        </ul>
        We may contact you to provide appointment reminders or information about treatment alternatives or other health-related benefits and services that may be of interest to you.</StyledDescription>
      <StyledSubheader>Uses and Disclosures of Protected Health Information Requiring Your Written Authorization</StyledSubheader>
      <StyledDescription>Other uses and disclosures of medical information not covered by this Notice or the laws that apply to us will be made only with your written authorization. If you give us authorization to use or disclose medical information about you, you may revoke that authorization, in writing, at any time. If you revoke your authorization, we will thereafter no longer use or disclose medical information about you for the reasons covered by your written authorization. You understand that we are unable to take back any disclosures we have already made with your authorization, and that we are required to retain our records of the care we have provided you.</StyledDescription>
      <StyledHeader>Your Individual Rights Regarding Your Medical Information</StyledHeader>
      <StyledSubheader>Complaints</StyledSubheader>
      <StyledDescription>If you believe your privacy rights have been violated, you may file a complaint with the Privacy Officer at this practice or with the Secretary of the Department of Health and Human Services. All complaints must be submitted in writing. You will not be penalized or discriminated against for filing a complaint.</StyledDescription>
      <StyledSubheader>Right to Request Restrictions</StyledSubheader>
      <StyledDescription>You have the right to request a restriction or limitation on the medical information we use or disclose about your for treatment, payment or health care operations or to someone who is involved in your care or the payment for your care. We are not required to agree to your request. If we do agree, we will comply with your request unless the information is needed to provide you with emergency treatment. To request restrictions, you must submit your request to the Privacy Officer at this practice. In your request, you must tell us what information you want to limit.</StyledDescription>
      <StyledSubheader>Right to Request Confidential Communications</StyledSubheader>
      <StyledDescription>You have the right to request how we should send communications to you about medical matters, and where you would like those communications sent. To request confidential communications, you must make your request to the Privacy Officer at this practice. We will not ask you the reason for your request. We will accommodate all reasonable requests. Your request must specify how or where you wish to be contacted. We reserve the right to deny a request if it imposes an unreasonable burden on the practice.</StyledDescription>
      <StyledSubheader>Right to Inspect and Copy</StyledSubheader>
      <StyledDescription>You have the right to inspect and copy medical information that may be used to make decisions about your care. Usually this includes medical and billing records but does not include psychotherapy notes, information compiled for use in a civil, criminal, or administrative action or proceeding, and protected health information to which access is prohibited by law. To inspect and copy medical information that may be used to make decisions about you, you must submit your request in writing to the Privacy Officer at this practice. If you request a copy of the information, we reserve the right to charge a fee for the costs of copying, mailing, or other supplied associated with your request. We may deny your request to inspect and copy in certain very limited circumstances. If you are denied access to medical information, you may request that the denial be reviewed. Another licensed health care professional chosen by this practice will review your request and the denial. The person conducting the review will not be the person who denied your request. We will comply with the outcome of the review.</StyledDescription>
      <StyledSubheader>Right to Amend</StyledSubheader>
      <StyledDescription>If you feel that medical information we have about you is incorrect or incomplete, you may ask us to amend the information. You have the right to request an amendment for as long as the information is kept. To request an amendment, your request must be made in writing and submitted to the Privacy Officer at this practice. In addition, you must provide a reason that supports your request. We may deny your request for an amendment if it is not in writing or does not include a reason to support the request. In addition, we may deny your request if the information was not created by us, is not part of the medical information kept at this practice, is not part of the information which you would be permitted to inspect and copy, or which we deem to be accurate and complete. If we deny your request for amendment, you have the right to file a statement of disagreement with us. We may prepare a rebuttal to your statement and will provide you with a copy of any such rebuttal. Statements of disagreement and any corresponding rebuttals will be kept of file and sent out with any future authorized requests for information pertaining to the appropriate portion of your record.</StyledDescription>
      <StyledSubheader>Right to an Accounting of Non-Standard Disclosures</StyledSubheader>
      <StyledDescription>You have the right to request a list of the disclosures we made of medical information about you. To request this list, you must submit your request to the Privacy Officer at this practice. Your request must state the time period for which you want to receive a list of disclosures that is no longer than six years, and may not include dates before April 14, 2003. Your request should indicate in what form you want the list (example: on paper or electronically). The first list you request within a 12-month period will be free. For additional lists, we reserve the right to charge you for the cost of providing the list.</StyledDescription>
      <StyledSubheader>Right to a Paper Copy of This Notice</StyledSubheader>
      <StyledDescription>You have the right to a paper copy of our current Notice of Privacy Practices at any time. Even if you have agreed to receive this Notice electronically, you are still entitled to a paper copy. To obtain a paper copy of the current Notice, please request one in writing from the Privacy Officer at this practice.</StyledDescription>
      <StyledHeader>Changes to this Notice</StyledHeader>
      <StyledDescription>We reserve the right to change this Notice. We reserve the right to make the revised or changed Notice effective for medical information we already have about you as well as any information we receive in the future. We will post the current Notice, with the effective date.</StyledDescription>
      <br />
      <TextLink label="Take me home" link="/" />
    </Styled404Section>
  </Layout>
);

export default PrivacyPolicy;
