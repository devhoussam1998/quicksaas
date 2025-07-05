import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface OtpVerificationProps {
  appName: string;
  mailFromAddress: string;
  userEmail: string;
  otpCode: string;
}

export default function OtpVerification(props: OtpVerificationProps) {
  const { appName, mailFromAddress, userEmail, otpCode } = props;

  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Body className="bg-gray-100 py-[40px] font-sans">
          <Container className="mx-auto max-w-[600px] rounded-[8px] bg-white shadow-sm">
            {/* Header */}
            <Section className="px-[40px] pt-[40px] pb-[20px]">
              <Heading className="m-0 mb-[8px] text-center text-[28px] font-bold text-gray-900">
                Verify Your Email
              </Heading>
              <Text className="m-0 text-center text-[16px] text-gray-600">
                Please use the verification code below to complete your
                registration
              </Text>
            </Section>

            {/* OTP Code Section */}
            <Section className="px-[40px] py-[20px]">
              <div className="rounded-[12px] border-[2px] border-dashed border-gray-300 bg-gray-50 py-[30px] text-center">
                <Text className="m-0 mb-[12px] text-[14px] tracking-wide text-gray-600 uppercase">
                  Your Verification Code
                </Text>
                <Text className="letter-spacing-[8px] m-0 font-mono text-[36px] font-bold text-gray-900">
                  {otpCode}
                </Text>
              </div>
            </Section>

            {/* Instructions */}
            <Section className="px-[40px] py-[20px]">
              <Text className="m-0 mb-[16px] text-[16px] text-gray-700">
                Hi there,
              </Text>
              <Text className="m-0 mb-[16px] text-[16px] text-gray-700">
                We received a request to verify your email address{" "}
                <strong>{userEmail}</strong>. Enter the 6-digit code above in
                the verification field to complete the process.
              </Text>
              <Text className="m-0 mb-[16px] text-[16px] text-gray-700">
                This code will expire in <strong>5 minutes</strong> for security
                reasons.
              </Text>
            </Section>

            {/* Security Notice */}
            <Section className="mx-[20px] rounded-[8px] bg-amber-50 px-[40px] py-[20px]">
              <Text className="m-0 mb-[8px] text-[14px] font-semibold text-amber-800">
                🔒 Security Notice
              </Text>
              <Text className="m-0 text-[14px] text-amber-700">
                If you didn't request this verification code, please ignore this
                email. Never share this code with anyone for your account
                security.
              </Text>
            </Section>

            <Hr className="mx-[40px] my-[30px] border-gray-200" />

            {/* Footer */}
            <Section className="px-[40px] pb-[40px]">
              <Text className="m-0 mb-[16px] text-[14px] text-gray-500">
                Need help? Contact our support team at{" "}
                <strong>{mailFromAddress}</strong>
              </Text>
              <Text className="m-0 text-[12px] text-gray-400">
                &copy; {new Date().getFullYear()} <strong>{appName}</strong>.
                All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
