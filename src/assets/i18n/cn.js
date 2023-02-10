import _ from "lodash";
import LOCALE_EN  from "./en.js";

/** 所有對應表一覧 flatten list */
export default Object.assign(
Object.assign({}, LOCALE_EN),
Object.assign({}, {
    account: "银行帐户",
    commissionClub: "Commission Club",
    continueWithFB: "Continue with Facebook",
    english: "English",
    getOTPNumber: "Get OTP number",
    getVerificationCode: "Get Verification Code",
    login: "登入",
    password: "Password",
    phoneNumber: "Phone Number",
    signIn: "登入",
    signUp: "註冊",
    signUpWithPhone: "Sign up with phone",
    simplifiedChinese: "簡體中文",
    username: "Username",
    forgotPassword: "FORGOT PASSWORD",
    forgotPasswordSuccess: "{name} will send you a verification code via SMS",
    updatePasswordSuccess: "password successfully updated",
    verifyOTPSuccess: "success",
    verifyOTPFailed: "failed",
    internalError: "Internal Error",
    loginSuccess: "success",
    signUpSuccess: "success",
    resendOTPNumber: "RESEND OTP NUMBER ({seconds})",
    enterYourPhoneNumber: "Enter your phone number to reset password",
    resetPassword: "Reset password",
    submit: "Submit",
    old_password: "Old Password",
    confirm_password: "Confirm Password",

    // PT abbreviate as Page Title
    PT_SignUpSetPwd: "AccountDetail",
    PT_SignUpOTP: "Enter OTP Number",
    PT_SignInOTP: "Forgot Password",
    PT_SignInUpdatePWD: "Reset Password",
    PT_SignInForgot: "Forgot Password",

    /// PH abbreviate as placeholder
    PH_password: "valid password...",
    PH_phoneNumber: "09+",
    PH_username: "valid username...",
    PH_old_password: "valid password...",
    PH_confirm_password: "re-type password",

    // VD abbreviate as validation
    VD_decimalPattern: "expect valid number",
    VD_intPattern: "expect valid integer",
    VD_amountLength: "expect 1 ~ 10 characters",
    VD_allUserPattern: "expect number, alphabetic, underline, or hyphen",
    VD_announcementContent: "can not be empty",
    VD_announcementTitle: "expect 1 ~ 300 character",
    VD_commission: "{name} must be less than or equal to {value}",
    VD_confirm: "Password Mismatch",
    VD_GeneralRemark: "expect 0 ~ 100 character",
    VD_invalidEmailFormat: "invalid email format",
    VD_newPassword: "expect not the same with original password",
    VD_nicknameLength: "expect 1 ~ 10 character",
    VD_nonUserName: "expect 4 ~ 30 character",
    VD_phone: "invalid phone number",
    VD_pwdLength  : "expect 8 ~ 30 character",
    VD_pwdPattern : "expect number, alphabetic, hash sign, hyphen, or underscore",
    VD_required: "required",
    VD_searchLength: "expect 3 ~ x character",
    VD_userLength : "expect 5 ~ 30 character",
    VD_userPattern: "expect number, alphabetic, or hyphen",
}));

