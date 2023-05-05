/* eslint-disable */

const awsmobile = {
  aws_project_region: import.meta.env.VITE_AWS_PROJECT_REGION,
  aws_appsync_graphqlEndpoint: import.meta.env.VITE_AWS_APPSYNC_GRAPHQLENDPOINT,
  aws_appsync_region: import.meta.env.VITE_AWS_APPSYNC_REGION,
  aws_appsync_authenticationType: import.meta.env
    .VITE_AWS_APPSYNC_AUTHENTICATIONTYPE,
  aws_appsync_apiKey: import.meta.env.VITE_AWS_APPSYNC_APIKEY,
  aws_cognito_identity_pool_id: import.meta.env
    .VITE_AWS_COGNITO_IDENTITY_POOL_ID,
  aws_cognito_region: import.meta.env.VITE_AWS_COGNITO_REGION,
  aws_user_pools_id: import.meta.env.VITE_AWS_USER_POOLS_ID,
  aws_user_pools_web_client_id: import.meta.env
    .VITE_AWS_USER_POOLS_WEB_CLIENT_ID,
  oauth: JSON.parse(import.meta.env.VITE_AWS_OAUTH || "{}"),
  aws_cognito_username_attributes: (
    import.meta.env.VITE_AWS_COGNITO_USERNAME_ATTRIBUTES || "EMAIL"
  ).split(","),
  aws_cognito_social_providers: (
    import.meta.env.VITE_AWS_COGNITO_SOCIAL_PROVIDERS || ""
  )
    .split(",")
    .filter(Boolean),
  aws_cognito_signup_attributes: (
    import.meta.env.VITE_AWS_COGNITO_SIGNUP_ATTRIBUTES ||
    "EMAIL,NAME,PHONE_NUMBER"
  ).split(","),
  aws_cognito_mfa_configuration: import.meta.env
    .VITE_AWS_COGNITO_MFA_CONFIGURATION,
  aws_cognito_mfa_types: (
    import.meta.env.VITE_AWS_COGNITO_MFA_TYPES || "SMS"
  ).split(","),
  aws_cognito_password_protection_settings: {
    passwordPolicyMinLength: parseInt(
      import.meta.env.VITE_AWS_COGNITO_PASSWORD_POLICY_MIN_LENGTH || "8",
      10
    ),
    passwordPolicyCharacters: (
      import.meta.env.VITE_AWS_COGNITO_PASSWORD_POLICY_CHARACTERS ||
      "REQUIRES_LOWERCASE,REQUIRES_NUMBERS,REQUIRES_SYMBOLS,REQUIRES_UPPERCASE"
    ).split(","),
  },
  aws_cognito_verification_mechanisms: (
    import.meta.env.VITE_AWS_COGNITO_VERIFICATION_MECHANISMS || "EMAIL"
  ).split(","),
};

export default awsmobile;
