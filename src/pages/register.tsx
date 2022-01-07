import React, { FC } from "react";

interface registerProps {
  username: string;
  password: string;
  phone: string;
  email: string;
}

const Register: React.FC<registerProps> = ({}) => {
  return <div>register route</div>;
};

export default Register;
