import React from "react";
import { LoginStyle } from "./LoginStyle";
import loginPageLogo from '../../../assets/loginPageLogo.png';
import UseLogin from './UseLogin';
import CommonTooltip from '../../../commonComponents/commonTooltip/CommonTooltip';
import { ToastContainer } from 'react-toastify';
import { StageSpinner } from 'react-spinners-kit'
import { Checkbox, FormControlLabel } from "@mui/material";
import { pink } from '@mui/material/colors';
import { colors } from "../../../constants/Color";
export default function Login() {
    const [{ values, handleChange, handleClickShowPassword, email, setEmail, loginHandler, ORG_LOADING, organizationLoginHandler, loading, organizationLogin, setorganizationLogin }] = UseLogin();
    // if (error) {
    //     notify()
    // }
    return (
        <div>
            <LoginStyle.MainPage>
                <LoginStyle.LoginContainer>
                    {/* Below Code for toastify   */}
                    {/* <ToastContainer/> */}
                    {/* Below Code for Header. (Login Heading and Logo) */}
                    <LoginStyle.InlineHeaderContainer>
                        <LoginStyle.LeftBorder />
                        <div>
                            <LoginStyle.LoginHeading>
                                Login
                            </LoginStyle.LoginHeading>
                            <LoginStyle.Image src={loginPageLogo} />
                        </div>
                    </LoginStyle.InlineHeaderContainer>
                    {/* Below Code for Email Input Field   */}
                    <LoginStyle.InputFieldHeading>
                        Email
                    </LoginStyle.InputFieldHeading>
                    <LoginStyle.IconAndInputField>
                        <LoginStyle.IconContainer>
                            <LoginStyle.PersonOutlineIcon />
                        </LoginStyle.IconContainer>
                        <LoginStyle.Input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <CommonTooltip route='login' title="Enter your email address e.g abc@gmail.com" />
                    </LoginStyle.IconAndInputField>
                    {/* Below Code for Password Input Field */}
                    <LoginStyle.InputFieldHeading>
                        Password
                    </LoginStyle.InputFieldHeading>
                    <LoginStyle.IconAndInputField>
                        <LoginStyle.IconContainer>
                            <LoginStyle.LockIcon />
                        </LoginStyle.IconContainer>
                        <LoginStyle.Input value={values.password} onChange={handleChange('password')} type={values.showPassword ? 'text' : 'password'} placeholder='Password' />
                        {/* Below Code is part of Password input field used for changing Password visible Icon Color   */}
                        {!values.showPassword ?
                            <LoginStyle.IconContainer>
                                <LoginStyle.VisibilityIcon onClick={handleClickShowPassword} showPassword={values.showPassword} />
                            </LoginStyle.IconContainer>
                            :
                            <LoginStyle.PasswordVisibleIconContainer>
                                <LoginStyle.VisibilityIcon onClick={handleClickShowPassword} showPassword={values.showPassword} />
                            </LoginStyle.PasswordVisibleIconContainer>
                        }
                        <CommonTooltip route='login' title='Enter your password' />
                    </LoginStyle.IconAndInputField>
                    <LoginStyle.OrgCheckbox>
                        <FormControlLabel
                            control={<Checkbox
                                sx={{
                                    color: colors.lightBlue,
                                    '&.Mui-checked': {
                                        color: colors.lightBlue,
                                    },
                                }}
                                onChange={() => setorganizationLogin(true)}
                            />
                            }
                            label="Organization Member?"

                        />
                    </LoginStyle.OrgCheckbox>
                    {/* Below Code for login Button   */}
                    {loading || ORG_LOADING ?
                        <LoginStyle.LoaderContainer>
                            <StageSpinner color="#0D4cb5" height={50} width={50} />
                        </LoginStyle.LoaderContainer>
                        :
                        <LoginStyle.ButtonContainer>
                            <LoginStyle.LoginButton onClick={organizationLogin ? organizationLoginHandler : loginHandler}>Login</LoginStyle.LoginButton>
                        </LoginStyle.ButtonContainer>
                    }
                </LoginStyle.LoginContainer>
            </LoginStyle.MainPage>
        </div>

    )
}