import React, { useState } from 'react'
import login from './assets/images/login.jpg'
import { Button, Checkbox, Form, Typography, Input } from 'antd'
import { AppleFilled, EyeInvisibleOutlined, EyeTwoTone, GoogleOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';

const { Text } = Typography;

const Login = () => {

  const [isAgreed, setIsAgreed] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log(e)
    navigate('/add-new-listing')
  }

  return (
    <>
      <div className="container w-screen h-screen flex">

        {/* image container  */}
        <div className="left w-[60%] h-full flex flex-col justify-center bg-center overflow-hidden gap-8 ps-20 pe-10 text-white" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${login})` }}>
          <h1 className='text-7xl font-bold'>Discover your perfect plot</h1>
          <p className='text-xl'>Explore the possibilities and uncover your perfect plot with us. Whether it's a serene countryside retreat, an urban oasis, or a picturesque piece of wilderness, our platform is your key to finding the ideal land. Start your journey now, and let the discovery of your dream property begin!</p>
        </div>

        {/* Form container  */}
        <div className="right w-[40%] bg-[#F3F4F8] flex flex-col justify-center px-10 ps-20">
          <div className="text-container pb-10">
            <h2 className='font-bold pb-3 text-5xl'>Welcome Back!</h2>
            <p className='text-[#7E7E7F]'>Login to access your account</p>
          </div>

          <div className="form">
            <Form layout="vertical" onFinish={handleSubmit}>
              {/* Email/Mobile Number */}
              <Form.Item
                label="Email/ Mobile Number"
                name="email"
                rules={[
                  {required: true,
                    message: "Please enter an email",
                  },
                  {
                    type: "email",
                    message: "Please enter a valid email"
                  }
                ]}
                hasFeedback
              >
                <Input
                  placeholder="Email/ Mobile number"
                  className='py-3 text-[16px] bg-transparent rounded-lg border-2'
                />
              </Form.Item>

              {/* Password */}
              <Form.Item 
              label="Password" 
              name="password"
              rules={[
                {required: true,
                  message: "Please enter a valid password"
                }
              ]}
              hasFeedback
              >
                <Input.Password
                  placeholder="6 characters, 1 Capital Letter"
                  className='py-3 text-[16px] bg-transparent rounded-lg border-2'
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                  
                />
              </Form.Item>

              {/* Forgot Password */}
              <div className="flex justify-end mb-4">
                <Text className="text-green-600 cursor-pointer">Forgot Password?</Text>
              </div>

              {/* Terms and Policy */}
              <Form.Item>
                <Checkbox
                  checked={isAgreed}
                  onChange={(e) => setIsAgreed(e.target.checked)}
                >
                  I agree to the <span className="text-blue-600">Terms & Policy</span>
                </Checkbox>
              </Form.Item>

              {/* Login Button */}
              <Form.Item>
                <Button
                  type="primary"
                  className="bg-[#065E14] text-white w-full h-10 rounded-md"
                  htmlType="submit"
                  disabled={!isAgreed}
                >
                  Login
                </Button>
              </Form.Item>
            </Form>

            <div className="redirect-login flex justify-between pt-5 pb-3">
              <Button size='large'>
                <GoogleOutlined className='text-xl' />
                Login with Google
              </Button>
              <Button size='large' className='py-3'>
                <AppleFilled className='text-xl' />
                Login with Apple
              </Button>
            </div>

            <p className='text-[#7E7E7F]'>Don't have an account? <span className='text-[#065E14] font-bold'>Sign Up</span></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login