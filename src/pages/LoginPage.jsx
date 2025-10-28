// import React from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { Link, Navigate } from "react-router-dom";
// import { Button, Input, Card } from "../components/common";
// import { useAuth } from "../hooks/useAuth";

// const loginSchema = z.object({
//   EmailOrUsername: z.string().min(1, "Tên đăng nhập không được để trống"),
//   Password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
// });

// const LoginPage = () => {
//   const { isAuthenticated, login, isLoggingIn } = useAuth();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(loginSchema),
//   });

//   // Redirect if already authenticated
//   if (isAuthenticated) {
//     return <Navigate to="/dashboard" replace />;
//   }

//   const onSubmit = async (data) => {
//     login(data);
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
//             Đăng nhập vào hệ thống
//           </h2>
//         </div>

//         {/* Login form */}
//         <Card className="p-8">
//           <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
//             <Input
//               label="Tên đăng nhập"
//               type="text"
//               required
//               {...register("EmailOrUsername")}
//               error={errors.EmailOrUsername?.message}
//               placeholder="Nhập tên đăng nhập"
//             />

//             <Input
//               label="Mật khẩu"
//               type="password"
//               required
//               {...register("Password")}
//               error={errors.Password?.message}
//               placeholder="Nhập mật khẩu"
//             />

//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   id="remember-me"
//                   name="remember-me"
//                   type="checkbox"
//                   className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
//                 />
//                 <label
//                   htmlFor="remember-me"
//                   className="ml-2 block text-sm text-gray-900">
//                   Ghi nhớ đăng nhập
//                 </label>
//               </div>

//               <div className="text-sm">
//                 <Link
//                   to="/forgot-password"
//                   className="font-medium text-primary-600 hover:text-primary-500">
//                   Quên mật khẩu?
//                 </Link>
//               </div>
//             </div>

//             <Button
//               type="submit"
//               className="w-full"
//               loading={isLoggingIn}
//               disabled={isLoggingIn}
//             >
//               {isLoggingIn ? 'Đang đăng nhập...' : 'Đăng nhập'}
//             </Button>
//           </form>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, Navigate } from "react-router-dom";
import { Button, Input, Card } from "../components/common";
import { useAuth } from "../hooks/useAuth";

// ✅ Schema kiểm tra dữ liệu đầu vào
const loginSchema = z.object({
  EmailOrUsername: z.string().min(1, "Tên đăng nhập không được để trống"),
  Password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});

const LoginPage = () => {
  const { isAuthenticated, login, isLoggingIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  // ✅ Nếu đã đăng nhập → chuyển hướng
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  const onSubmit = async (data) => {
    login(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link to="/" className="inline-block">
            <div className="flex items-center justify-center h-12 w-12 bg-primary-600 rounded-lg mx-auto cursor-pointer hover:bg-primary-700 transition-colors">
              <span className="text-white font-bold text-xl">DX</span>
            </div>
          </Link>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Đăng nhập vào hệ thống
          </h2>
        </div>

        {/* Form đăng nhập */}
        <Card className="p-8">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Tên đăng nhập"
              type="text"
              required
              {...register("EmailOrUsername")}
              error={errors.EmailOrUsername?.message}
              placeholder="Nhập tên đăng nhập"
            />

            <Input
              label="Mật khẩu"
              type="password"
              required
              {...register("Password")}
              error={errors.Password?.message}
              placeholder="Nhập mật khẩu"
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Ghi nhớ đăng nhập
                </label>
              </div>

              <div className="text-sm">
                <Link
                  to="/forgot-password"
                  className="font-medium text-primary-600 hover:text-primary-500"
                >
                  Quên mật khẩu?
                </Link>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full"
              loading={isLoggingIn}
              disabled={isLoggingIn}
            >
              {isLoggingIn ? "Đang đăng nhập..." : "Đăng nhập"}
            </Button>

            {/* ✅ Nút Đăng ký */}
            <div className="text-sm text-center mt-4">
              <span>Bạn chưa có tài khoản? </span>
              <Link
                to="/register"
                className="text-primary-600 hover:text-primary-500 font-medium"
              >
                Đăng ký
              </Link>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
