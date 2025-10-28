// import React from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { Link, Navigate } from "react-router-dom";
// import { Button, Input, Card } from "../components/common";
// import { useAuth } from "../hooks/useAuth";

// // ✅ Schema cho đăng ký
// const registerSchema = z.object({
//   Email: z.string().email("Email không hợp lệ"),
//   Password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
//   FullName: z.string().min(1, "Tên đầy đủ không được để trống"),
// });

// const Register = () => {
//   const { isAuthenticated, register: registerUser, isRegistering } = useAuth();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(registerSchema),
//   });

//   if (isAuthenticated) {
//     return <Navigate to="/dashboard" replace />;
//   }

//   const onSubmit = async (data) => {
//     registerUser(data); // ✅ gọi đúng hàm đăng ký
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         {/* Header */}
//         <div className="text-center">
//           <Link to="/" className="inline-block">
//             <div className="flex items-center justify-center h-12 w-12 bg-primary-600 rounded-lg mx-auto cursor-pointer hover:bg-primary-700 transition-colors">
//               <span className="text-white font-bold text-xl">DX</span>
//             </div>
//           </Link>
//           <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
//             Đăng ký vào hệ thống
//           </h2>
//         </div>

//         {/* Form đăng ký */}
//         <Card className="p-8">
//           <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
//             <Input
//               label="Email đăng ký"
//               type="text"
//               required
//               {...register("Email")}
//               error={errors.Email?.message}
//               placeholder="Nhập địa chỉ email"
//             />

//             <Input
//               label="Mật khẩu"
//               type="password"
//               required
//               {...register("Password")}
//               error={errors.Password?.message}
//               placeholder="Nhập mật khẩu"
//             />

//             <Input
//               label="Tên đầy đủ"
//               type="text"
//               required
//               {...register("FullName")}
//               error={errors.FullName?.message}
//               placeholder="Nhập họ và tên"
//             />

//             <Button
//               type="submit"
//               className="w-full"
//               loading={isRegistering}
//               disabled={isRegistering}
//             >
//               {isRegistering ? "Đang đăng ký..." : "Đăng ký"}
//             </Button>

//             <div className="text-sm text-center mt-4">
//               <span>Đã có tài khoản? </span>
//               <Link
//                 to="/login"
//                 className="text-primary-600 hover:text-primary-500 font-medium"
//               >
//                 Đăng nhập
//               </Link>
//             </div>
//           </form>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Register;

// import React, { useState } from "react";
// import axios from "axios";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { Link, Navigate } from "react-router-dom";
// import { Button, Input, Card } from "../components/common";
// import { useAuth } from "../hooks/useAuth";

// // Schema kiểm tra
// const registerSchema = z.object({
//   Email: z.string().email("Email không hợp lệ"),
//   Password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
//   FullName: z.string().min(1, "Tên đầy đủ không được để trống"),
// });

// const Register = () => {
//   const { isAuthenticated, register: registerUser, isRegistering } = useAuth();
//   const [emailLoading, setEmailLoading] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(registerSchema),
//   });

//   if (isAuthenticated) {
//     return <Navigate to="/dashboard" replace />;
//   }

//   // Lấy email từ Mail.tm và gán vào form
//   const handleGetTempEmail = async () => {
//     setEmailLoading(true);
//     try {
//       const domainRes = await axios.get("https://api.mail.tm/domains");
//       const domain = domainRes.data["hydra:member"][0].domain;
//       const randomName = Math.random().toString(36).substring(2, 10);
//       const tempEmail = `${randomName}@${domain}`;

//       setValue("Email", tempEmail); // ✅ Gán vào form
//     } catch (error) {
//       alert("Không lấy được email tạm thời");
//     } finally {
//       setEmailLoading(false);
//     }
//   };

//   const onSubmit = async (data) => {
//     registerUser(data); // Gửi lên backend như Swagger
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         {/* Header */}
//         <div className="text-center">
//           <Link to="/" className="inline-block">
//             <div className="flex items-center justify-center h-12 w-12 bg-primary-600 rounded-lg mx-auto cursor-pointer hover:bg-primary-700 transition-colors">
//               <span className="text-white font-bold text-xl">DX</span>
//             </div>
//           </Link>
//           <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
//             Đăng ký vào hệ thống
//           </h2>
//         </div>

//         {/* Form đăng ký */}
//         <Card className="p-8 space-y-6">
//           <Button
//             onClick={handleGetTempEmail}
//             loading={emailLoading}
//             disabled={emailLoading}
//             className="w-full"
//           >
//             {emailLoading ? "Đang lấy email..." : "Lấy email tạm thời từ Mail.tm"}
//           </Button>

//           <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
//             <Input
//               label="Email đăng ký"
//               type="text"
//               required
//               {...register("Email")}
//               error={errors.Email?.message}
//               placeholder="Email sẽ được gán tự động"
//             />

//             <Input
//               label="Mật khẩu"
//               type="password"
//               required
//               {...register("Password")}
//               error={errors.Password?.message}
//               placeholder="Nhập mật khẩu"
//             />

//             <Input
//               label="Tên đầy đủ"
//               type="text"
//               required
//               {...register("FullName")}
//               error={errors.FullName?.message}
//               placeholder="Nhập họ và tên"
//             />

//             <Button
//               type="submit"
//               className="w-full"
//               loading={isRegistering}
//               disabled={isRegistering}
//             >
//               {isRegistering ? "Đang đăng ký..." : "Đăng ký"}
//             </Button>

//             <div className="text-sm text-center mt-4">
//               <span>Đã có tài khoản? </span>
//               <Link
//                 to="/login"
//                 className="text-primary-600 hover:text-primary-500 font-medium"
//               >
//                 Đăng nhập
//               </Link>
//             </div>
//           </form>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, Navigate } from "react-router-dom";
import { Button, Input, Card } from "../components/common";
import { useAuth } from "../hooks/useAuth";

const registerSchema = z.object({
  Email: z.string().email("Email không hợp lệ"),
  Password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
  FullName: z.string().min(1, "Tên đầy đủ không được để trống"),
});

const Register = () => {
  const { isAuthenticated, register: registerUser, login } = useAuth();
  const [emailLoading, setEmailLoading] = useState(false);
  const [mailAccount, setMailAccount] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  if (isAuthenticated) return <Navigate to="/dashboard" replace />;

  const handleGetTempEmail = async () => {
    setEmailLoading(true);
    try {
      const domainRes = await axios.get("https://api.mail.tm/domains");
      const domain = domainRes.data["hydra:member"][0].domain;
      const randomName = Math.random().toString(36).substring(2, 10);
      const tempEmail = `${randomName}@${domain}`;
      const password = "123456Ab@";

      await axios.post("https://api.mail.tm/accounts", {
        address: tempEmail,
        password,
      });

      setMailAccount({ email: tempEmail, password });
      setValue("Email", tempEmail);
      setValue("Password", password);
    } catch (error) {
      alert("Không lấy được email tạm thời");
    } finally {
      setEmailLoading(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      await registerUser(data);

      const tokenRes = await axios.post("https://api.mail.tm/token", {
        address: data.Email,
        password: data.Password,
      });
      const mailToken = tokenRes.data.token;

      const messagesRes = await axios.get("https://api.mail.tm/messages", {
        headers: { Authorization: `Bearer ${mailToken}` },
      });

      const messageId = messagesRes.data["hydra:member"][0]?.id;
      if (!messageId) throw new Error("Không tìm thấy email xác minh");

      const messageRes = await axios.get(`https://api.mail.tm/messages/${messageId}`, {
        headers: { Authorization: `Bearer ${mailToken}` },
      });

      const html = messageRes.data.html[0];
      const linkMatch = html.match(/https?:\/\/[^"]*verify[^"]*/);
      const verifyLink = linkMatch?.[0];

      if (!verifyLink) throw new Error("Không tìm thấy link xác minh");

      window.open(verifyLink, "_blank");
      alert("✅ Đã mở link xác minh. Vui lòng xác nhận rồi quay lại đăng nhập.");

      // Đợi người dùng xác minh xong rồi login
      setTimeout(async () => {
        try {
          await login({ EmailOrUsername: data.Email, Password: data.Password });
        } catch {
          alert("❌ Login thất bại. Có thể chưa xác minh xong.");
        }
      }, 10000);
    } catch (error) {
      console.error(error);
      alert("❌ Đăng ký hoặc xác minh thất bại");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link to="/" className="inline-block">
            <div className="flex items-center justify-center h-12 w-12 bg-primary-600 rounded-lg mx-auto">
              <span className="text-white font-bold text-xl">DX</span>
            </div>
          </Link>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Đăng ký vào hệ thống</h2>
        </div>

        <Card className="p-8 space-y-6">
          <Button
            onClick={handleGetTempEmail}
            loading={emailLoading}
            disabled={emailLoading}
            className="w-full"
          >
            {emailLoading ? "Đang lấy email..." : "Lấy email tạm thời từ Mail.tm"}
          </Button>

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Email đăng ký"
              type="text"
              required
              {...register("Email")}
              error={errors.Email?.message}
              placeholder="Email sẽ được gán tự động"
            />

            <Input
              label="Mật khẩu"
              type="password"
              required
              {...register("Password")}
              error={errors.Password?.message}
              placeholder="Mật khẩu mặc định"
            />

            <Input
              label="Tên đầy đủ"
              type="text"
              required
              {...register("FullName")}
              error={errors.FullName?.message}
              placeholder="Nhập họ và tên"
            />

            <Button type="submit" className="w-full">Đăng ký</Button>

            <div className="text-sm text-center mt-4">
              <span>Đã có tài khoản? </span>
              <Link to="/login" className="text-primary-600 hover:text-primary-500 font-medium">
                Đăng nhập
              </Link>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Register;

