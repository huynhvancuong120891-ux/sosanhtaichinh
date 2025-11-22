import { CreditCard, Home, Car, Wallet } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
const products = [
  {
    icon: Wallet,
    title: 'Vay tiền mặt',
    description: 'Giải ngân nhanh chóng, thủ tục đơn giản, lãi suất ưu đãi',
    color: 'bg-blue-500',
  },
  {
    icon: CreditCard,
    title: 'Thẻ tín dụng',
    description: 'Mua sắm trả góp 0% lãi suất, ưu đãi hoàn tiền hấp dẫn',
    color: 'bg-purple-500',
  },
  {
    icon: Home,
    title: 'Vay mua nhà',
    description: 'Lãi suất cạnh tranh, thời gian vay linh hoạt đến 25 năm',
    color: 'bg-green-500',
  },
  {
    icon: Car,
    title: 'Vay mua xe',
    description: 'Tài trợ 80% giá trị xe, phê duyệt nhanh trong 24 giờ',
    color: 'bg-orange-500',
  },
];
export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Sản phẩm & Dịch vụ
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chúng tôi cung cấp đa dạng các sản phẩm tài chính phù hợp với mọi nhu cầu của bạn
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-[#E30613]">
              <CardHeader>
                <div className={`w-16 h-16 ${product.color} rounded-2xl flex items-center justify-center mb-4`}>
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">{product.title}</CardTitle>
                <CardDescription className="text-base">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="text-[#E30613] p-0 hover:underline">
                  Tìm hiểu thêm →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}