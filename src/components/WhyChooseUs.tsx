import { Shield, Clock, Users, Award } from 'lucide-react';
const features = [
  {
    icon: Shield,
    title: 'An toàn & Bảo mật',
    description: 'Thông tin khách hàng được bảo mật tuyệt đối theo tiêu chuẩn quốc tế',
  },
  {
    icon: Clock,
    title: 'Nhanh chóng',
    description: 'Phê duyệt trong 24h, giải ngân nhanh chóng ngay sau khi được duyệt',
  },
  {
    icon: Users,
    title: '10+ triệu khách hàng',
    description: 'Được hơn 10 triệu khách hàng trên toàn quốc tin tưởng và lựa chọn',
  },
  {
    icon: Award,
    title: 'Uy tín hàng đầu',
    description: 'Công ty tài chính tiêu dùng lớn nhất và uy tín nhất Việt Nam',
  },
];
export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Vì sao chọn FE CREDIT?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chúng tôi cam kết mang đến dịch vụ tài chính tốt nhất với nhiều ưu điểm vượt trội
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#E30613]/10 rounded-full">
                <feature.icon className="w-10 h-10 text-[#E30613]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-gradient-to-r from-[#E30613] to-[#B00410] rounded-3xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl lg:text-4xl font-bold mb-4">
            Sẵn sàng bắt đầu với FE CREDIT?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Đăng ký ngay hôm nay để nhận tư vấn miễn phí từ chuyên gia của chúng tôi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#E30613] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
              Đăng ký ngay
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-colors">
              Gọi 1900 6669
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}