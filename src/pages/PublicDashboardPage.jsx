import React from 'react';
import { Link } from 'react-router-dom';
import {
    Car,
    Palette,
    Shield,
    Clock,
    Star,
    MapPin,
    Phone,
    Mail,
    Instagram,
    Facebook,
    CheckCircle,
    Award,
    Users,
    Zap,
    LogIn,
    Settings
} from 'lucide-react';

const PublicDashboardPage = () => {
    const services = [
        {
            id: 1,
            title: 'Bảo Dưỡng Xe Điện',
            description: 'Dịch vụ bảo dưỡng xe điện chuyên nghiệp cho xe điện',
            icon: Car,
            features: [
                'Đo dung lượng pin hiện tại',
                'Kiểm tra hệ thống làm mát pin',
                'Kiểm tra hệ thống quản lý pin',
                'Vệ sinh và kiểm tra kết nối điện áp cao'
            ],
            price: 'Từ 500.000đ',
            color: 'bg-blue-500'
        },
        {
            id: 2,
            title: 'Kiểm tra động cơ điện',
            description: 'Đội ngũ thiết kế chuyên nghiệp, kiểm tra theo quy trình cụ thể',
            icon: Palette,
            features: [
                'Kiểm tra độ rung, tiếng ồn',
                'Kiểm tra hệ thống truyền động',
                'Vệ sinh bộ điều khiển điện tử'
            ],
            price: 'Từ 200.000đ',
            color: 'bg-purple-500'
        },
        {
            id: 3,
            title: 'Kiểm tra hệ thống sạc',
            description: 'Đảm bảo an toàn – Tối ưu hiệu suất – Kéo dài tuổi thọ pin',
            icon: Shield,
            features: [
                'Kiểm tra cổng sạc, dây sạc, bộ chuyển đổi',
                'Đánh giá hiệu suất sạc',
                'Kiểm tra chống rò điện và an toàn điện'
            ],
            price: 'Từ 700.000đ',
            color: 'bg-green-500'
        },
        {
            id: 4,
            title: 'Bảo hành & Bảo trì',
            description: 'Chế độ bảo hành uy tín, dịch vụ bảo trì định kỳ',
            icon: Shield,
            features: [
                'Bảo hành 12 tháng',
                'Bảo trì định kỳ',
                'Thay thế miễn phí',
                'Hỗ trợ 24/7'
            ],
            price: 'Miễn phí',
            color: 'bg-green-500'
        }
    ];

    const whyChooseUs = [
        {
            icon: Award,
            title: 'Chất lượng hàng đầu',
            description: 'Sử dụng vật liệu cao cấp, công nghệ hiện đại'
        },
        {
            icon: Users,
            title: 'Đội ngũ chuyên nghiệp',
            description: 'Thợ lành nghề, kinh nghiệm nhiều năm'
        },
        {
            icon: Clock,
            title: 'Thời gian nhanh chóng',
            description: 'Hoàn thành đúng hẹn, không làm mất thời gian'
        },
        {
            icon: Star,
            title: 'Dịch vụ tận tâm',
            description: 'Tư vấn miễn phí, hỗ trợ khách hàng 24/7'
        }
    ];

    const testimonials = [
        {
            name: 'Nguyễn Văn A',
            role: 'Quản lý trung tâm EV Care Quận 7',
            content: 'Phần mềm giúp tôi theo dõi lịch bảo dưỡng, quản lý khách hàng và kiểm tra tình trạng pin cực kỳ dễ dàng. Giao diện thân thiện, thao tác nhanh.',
            rating: 5
        },
        {
            name: 'Trần Thị B',
            role: 'Chủ garage xe điện tại Bình Thạnh',
            content: 'Từ khi dùng phần mềm, quy trình tiếp nhận và xử lý xe điện trở nên chuyên nghiệp hơn. Khách hàng hài lòng, nhân viên thao tác hiệu quả.',
            rating: 5
        },
        {
            name: 'Lê Văn C',
            role: 'Kỹ thuật viên EV Station Thủ Đức',
            content: 'Tính năng quản lý lịch hẹn và kiểm tra hệ thống sạc rất hữu ích. Giúp tôi tiết kiệm thời gian và tránh sai sót trong bảo dưỡng.',
            rating: 5
        }
    ];

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
        ));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header with Login Button */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold text-gray-900">EV</h1>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link
                                to="/services"
                                className="text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                Dịch vụ
                            </Link>
                            <Link
                                to="/contact"
                                className="text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                Liên hệ
                            </Link>
                            <div className="border-l border-gray-300 h-6"></div>
                            <Link
                                to="/login"
                                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                            >
                                <LogIn className="w-4 h-4" />
                                Đăng nhập hệ thống
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            EV - Chuyên nghiệp & Uy tín
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-blue-100">
                            Dịch vụ bảo dưỡng xe điện hàng đầu Việt Nam
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Liên hệ ngay
                            </Link>
                            <Link
                                to="/services"
                                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                            >
                                Xem dịch vụ
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Dịch vụ của chúng tôi
                    </h2>
                    <p className="text-xl text-gray-600">
                        Chuyên nghiệp - Chất lượng - Uy tín
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                            <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                                <service.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                            <p className="text-gray-600 mb-4">{service.description}</p>
                            <ul className="space-y-2 mb-6">
                                {service.features.map((feature, index) => (
                                    <li key={index} className="flex items-center text-sm text-gray-600">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="text-right">
                                <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Tại sao chọn EV?
                        </h2>
                        <p className="text-xl text-gray-600">
                            Những lý do khiến chúng tôi trở thành lựa chọn hàng đầu
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyChooseUs.map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <item.icon className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Khách hàng nói gì về chúng tôi
                        </h2>
                        <p className="text-xl text-gray-600">
                            Phản hồi từ những khách hàng đã sử dụng dịch vụ
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                                <div className="flex items-center mb-4">
                                    {renderStars(testimonial.rating)}
                                </div>
                                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                                <div>
                                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="bg-blue-600 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Liên hệ với chúng tôi
                            </h2>
                            <p className="text-xl mb-6 text-blue-100">
                                Hãy để chúng tôi tư vấn và báo giá miễn phí cho bạn
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <MapPin className="w-5 h-5 mr-3" />
                                    <span>245 Nguyễn Thị Minh Khai, Quận 3, TP.HCM</span>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="w-5 h-5 mr-3" />
                                    <span>0909 123 456</span>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="w-5 h-5 mr-3" />
                                    <span>info@ev.com</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="bg-white text-blue-600 rounded-lg p-8">
                                <h3 className="text-2xl font-bold mb-4">Đặt lịch tư vấn</h3>
                                <p className="mb-6">Nhận tư vấn và báo giá miễn phí</p>
                                <Link
                                    to="/contact"
                                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                >
                                    Đặt lịch ngay
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">EV</h3>
                            <p className="text-gray-400">
                                Dịch vụ bảo dưỡng xe điện chuyên nghiệp, uy tín hàng đầu Việt Nam.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Dịch vụ</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>Bảo dưỡng xe điện</li>
                                <li>Kiểm tra động cơ điện</li>
                                <li>Kiểm tra hệ thống sạc</li>
                                <li>Bảo hành & bảo trì</li>
                                <li>Tư vấn miễn phí</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Liên hệ</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>0909 123 456</li>
                                <li>info@ev.com</li>
                                <li>245 Nguyễn Thị Minh Khai</li>
                                <li>Quận 3, TP.HCM</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Theo dõi</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <Facebook className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <Instagram className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 EV. Tất cả quyền được bảo lưu.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PublicDashboardPage;
