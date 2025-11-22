export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
              Về FE CREDIT
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              FE CREDIT là công ty tài chính tiêu dùng hàng đầu tại Việt Nam, được thành lập từ năm 2015. Chúng tôi tự hào là đơn vị tiên phong trong việc cung cấp các giải pháp tài chính linh hoạt, hiện đại và phù hợp với nhu cầu của người Việt Nam.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Với hơn 10 triệu khách hàng trên toàn quốc, chúng tôi cam kết mang đến những sản phẩm và dịch vụ tài chính chất lượng cao, giúp khách hàng dễ dàng tiếp cận nguồn vốn để thực hiện ước mơ của mình.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#E30613]">10M+</div>
                <div className="text-gray-600 mt-2">Khách hàng</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#E30613]">500+</div>
                <div className="text-gray-600 mt-2">Chi nhánh</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#E30613]">8+</div>
                <div className="text-gray-600 mt-2">Năm kinh nghiệm</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/id/201/700/500" 
              alt="About FE Credit" 
              className="rounded-3xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#E30613] rounded-3xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#E30613]/20 rounded-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}