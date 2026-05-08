const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

async function main() {
    const about_en = `V-KAWACH (by Tarkshya Solution) is a next-generation digital security ecosystem built with a strong mission to make Indian roads, communities, and daily life safer, smarter, and more responsive. In a world where timely communication can make all the difference, V-KAWACH is designed to bridge critical gaps during emergencies using simple yet powerful technology.

At its core, V-KAWACH leverages advanced QR-based identification systems paired with privacy-first call masking to enable instant, secure communication. Whether it’s a misplaced vehicle, a lost pet, a missing personal belonging, or a situation involving your loved ones, V-KAWACH ensures that help can reach you quickly without exposing your personal information. A simple scan of a QR code allows anyone to connect with the rightful owner in real time, while keeping sensitive details like phone numbers and identity completely protected.

What makes V-KAWACH truly impactful is its focus on practical, real-world problems. Everyday situations such as minor road incidents, unattended vehicles, or lost items often turn into major inconveniences due to lack of proper communication channels. V-KAWACH eliminates this friction by providing a direct, secure, and user-friendly way to connect instantly, reducing stress, saving time, and improving overall safety outcomes.

Beyond individual use, V-KAWACH is built to scale across communities, residential societies, businesses, and urban ecosystems. It has the potential to become a standardized layer of safety infrastructure, where people can rely on a trusted system to assist in emergencies without hesitation. By combining accessibility with robust privacy measures, we ensure that users feel confident and secure while using the platform.

Our vision is not just to solve today’s problems, but to create a future where safety is proactive, communication is seamless, and privacy is never compromised. With continuous innovation, strong technological foundations, and a user-centric approach, V-KAWACH aims to redefine how people, vehicles, and communities stay connected and protected in an increasingly digital world.`;
    
    const about_hi = `वी-कवच (तार्क्ष्य समाधान द्वारा) एक अगली पीढ़ी का डिजिटल सुरक्षा पारिस्थितिकी तंत्र है, जिसे भारतीय सड़कों, समुदायों और दैनिक जीवन को सुरक्षित, स्मार्ट और अधिक प्रतिक्रियाशील बनाने के एक मजबूत मिशन के साथ बनाया गया है। ऐसी दुनिया में जहां समय पर संचार बहुत बड़ा अंतर पैदा कर सकता है, वी-कवच को सरल लेकिन शक्तिशाली तकनीक का उपयोग करके आपातकालीन स्थितियों के दौरान महत्वपूर्ण अंतराल को पाटने के लिए डिज़ाइन किया गया है।

इसके मूल में, वी-कवच तत्काल, सुरक्षित संचार सक्षम करने के लिए गोपनीयता-प्रथम कॉल मास्किंग के साथ उन्नत क्यूआर-आधारित पहचान प्रणालियों का लाभ उठाता है। चाहे वह गलत जगह पर खड़ा वाहन हो, खोया हुआ पालतू जानवर हो, गुम हुई व्यक्तिगत वस्तु हो, या आपके प्रियजनों से जुड़ी स्थिति हो, वी-कवच सुनिश्चित करता है कि आपकी व्यक्तिगत जानकारी उजागर किए बिना मदद आप तक जल्दी पहुँच सके। क्यूआर कोड का एक साधारण स्कैन किसी को भी वास्तविक समय में सही मालिक से जुड़ने की अनुमति देता है, जबकि फोन नंबर और पहचान जैसे संवेदनशील विवरण पूरी तरह से सुरक्षित रहते हैं।

वी-कवच को जो वास्तव में प्रभावशाली बनाता है, वह है व्यावहारिक, वास्तविक दुनिया की समस्याओं पर इसका ध्यान। सड़क की मामूली घटनाएं, लावारिस वाहन, या खोई हुई वस्तुओं जैसी रोजमर्रा की स्थितियां अक्सर उचित संचार चैनलों की कमी के कारण बड़ी असुविधाओं में बदल जाती हैं। वी-कवच तुरंत जुड़ने का एक सीधा, सुरक्षित और उपयोगकर्ता के अनुकूल तरीका प्रदान करके इस घर्षण को समाप्त करता है, तनाव कम करता है, समय बचाता है और समग्र सुरक्षा परिणामों में सुधार करता है।

व्यक्तिगत उपयोग के अलावा, वी-कवच को समुदायों, आवासीय समितियों, व्यवसायों और शहरी पारिस्थितिकी प्रणालियों में स्केल करने के लिए बनाया गया है। इसमें सुरक्षा बुनियादी ढांचे की एक मानकीकृत परत बनने की क्षमता है, जहां लोग बिना किसी हिचकिचाहट के आपात स्थिति में सहायता के लिए एक भरोसेमंद प्रणाली पर भरोसा कर सकते हैं। मजबूत गोपनीयता उपायों के साथ पहुंच का संयोजन करके, हम यह सुनिश्चित करते हैं कि उपयोगकर्ता प्लेटफॉर्म का उपयोग करते समय आत्मविश्वास और सुरक्षित महसूस करें।

हमारा विज़न न केवल आज की समस्याओं को हल करना है, बल्कि एक ऐसा भविष्य बनाना है जहाँ सुरक्षा सक्रिय हो, संचार निर्बाध हो और गोपनीयता से कभी समझौता न हो। निरंतर नवाचार, मजबूत तकनीकी नींव और उपयोगकर्ता-केंद्रित दृष्टिकोण के साथ, वी-कवच का लक्ष्य यह फिर से परिभाषित करना है कि लोग, वाहन और समुदाय इस तेजी से डिजिटल होती दुनिया में कैसे जुड़े और सुरक्षित रहें।`;

    const settings = [
        { key: 'about_content', value: about_en },
        { key: 'about_content_hi', value: about_hi }
    ];

    for (const s of settings) {
        await prisma.setting.upsert({
            where: { key: s.key },
            update: { value: s.value },
            create: { key: s.key, value: s.value }
        });
    }

    console.log("Settings updated with long mission statement successfully.");
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
