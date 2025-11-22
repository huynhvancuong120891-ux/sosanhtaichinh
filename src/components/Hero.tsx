import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#E30613] to-[#B00410] text-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Giải pháp tài chính
              <span className="block">linh hoạt cho bạn</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/90">
              FE CREDIT - Công ty tài chính tiêu dùng hàng đầu Việt Nam với hơn 10 triệu khách hàng tin dùng
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-[#E30613] hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
                Vay tiền mặt
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold">
                Tìm hiểu thêm
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-white/10 rounded-3xl backdrop-blur-sm p-8 flex items-center justify-center">
              <img 
                src="https://picsum.photos/id/180/600/600" 
                alt="Financial Services" 
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
    </section>
  );
}