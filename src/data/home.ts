// Homepage content, copied verbatim from the Claude Design prototype logic.
export const trust: string[] = ['Thousands of Patients Served','Same-Day Appointments Available','Accepts Insurance (call to confirm yours)'];
export const services = [
  ['Auto Injury Relief','Recover Faster After a Car Accident',"We specialize in chiropractic care for auto accident injuries, including whiplash, neck pain, and back pain. If you've been in a car accident in Lenexa or Johnson County, our detailed evaluations and personalized care plans help you heal quickly and safely.",'/services/auto-injury-relief/'],
  ['Chiropractic Care','Relieve Pain. Restore Balance. Regain Control.',"We use advanced chiropractic techniques to address spinal misalignments, headaches, neck pain, low back pain, and more. Whether you live in Overland Park, Shawnee, or nearby, you'll find expert care here.",'/services/chiropractic/'],
  ['Golf Performance Care','Stay in the Game & Play Pain-Free','We help golfers improve mobility, reduce pain, and prevent injuries with targeted chiropractic adjustments and performance care. Trusted by golfers throughout Lenexa, Leawood, and Prairie Village.','/services/golf/'],
  ['Acupuncture','Balance Your Body, Relieve Your Stress','Our acupuncture treatments are designed to help reduce chronic pain, improve sleep, and enhance overall wellness. Patients from Olathe, Merriam, and Mission come to us for natural, drug-free care.','/services/acupuncture/'],
  ['Pediatric Chiropractic','Gentle, Effective Care for Children','From birth-related stress to growing pains and posture issues, we offer safe chiropractic adjustments for infants, children, and teens.','/services/chiropractic/family-chiropractic/chiropractic-care-for-kids/'],
  ['Prenatal Chiropractic','Support for a Healthy Pregnancy','Reduce back pain, improve sleep, and support optimal fetal positioning with prenatal chiropractic care. Trusted by expectant mothers across Lenexa and the surrounding Kansas City suburbs.','/services/chiropractic/family-chiropractic/pregnancy/']
].map((s, i) => ({ n: i + 1, title: s[0], tag: s[1], body: s[2], href: s[3] }));
const conditions = [
  ['Back Pain','Restore mobility and reduce chronic or acute back pain.'],
  ['Neck Pain','Address stiffness, misalignment, and tension in the neck.'],
  ['Headaches and Migraines','Target root causes of tension and nerve-related headaches.'],
  ['Sciatica','Relieve radiating pain from the lower back down the leg.'],
  ['Scoliosis','Manage spinal curvature with gentle chiropractic care.'],
  ['Disc Injury','Support healing and reduce pressure from bulging or herniated discs.'],
  ['Whiplash','Recover from auto accident injuries with targeted adjustments.'],
  ['Work Injury','Ease pain and prevent long-term damage from workplace strains.'],
  ['Arm and Leg Pain','Treat nerve impingements and restore pain-free movement.'],
  ['Carpal Tunnel','Reduce wrist pain and numbness with nerve-focused care.'],
  ['Shoulder Pain','Improve mobility and relieve inflammation in the shoulder joint.'],
  ['Vertigo','Improve balance and reduce dizziness caused by spinal misalignments.']
].map(c => ({ name: c[0], desc: c[1], href: c[0] === 'Back Pain' ? '/services/chiropractic/spine-care/back-pain/' : c[0] === 'Neck Pain' ? '/services/chiropractic/spine-care/neck-pain/' : c[0] === 'Headaches and Migraines' ? '/services/chiropractic/spine-care/headaches-migraines/' : c[0] === 'Sciatica' ? '/services/chiropractic/spine-care/sciatica/' : c[0] === 'Scoliosis' ? '/services/chiropractic/spine-care/scoliosis/' : c[0] === 'Disc Injury' ? '/services/chiropractic/injuries/disc-injury/' : ({ 'Whiplash': '/services/chiropractic/injuries/whiplash/', 'Work Injury': '/services/chiropractic/injuries/work-injury/', 'Arm and Leg Pain': '/services/chiropractic/extremities/arm-leg/', 'Carpal Tunnel': '/services/chiropractic/extremities/carpal-tunnel/', 'Shoulder Pain': '/services/chiropractic/extremities/shoulder-pain/', 'Vertigo': '/services/chiropractic/other-symptoms/vertigo/' })[c[0]] || '/conditions/' + c[0].toLowerCase().replace(/[^a-z]+/g, '-') + '/' }));
export const steps = [
  ['Schedule Your Complimentary Consultation',"Request your appointment online or by phone. We'll take the time to listen to your health concerns and get to know your needs."],
  ['Comprehensive Evaluation & Diagnosis','At your first visit, we conduct a detailed chiropractic exam, neurologic testing, posture scans, and digital X-rays. From there, we build a custom plan based on your condition and goals.'],
  ['Begin Your Personalized Care Plan',"Whether you're recovering from an auto injury, dealing with chronic pain, or looking for peak performance on the golf course, we'll guide you through a treatment plan tailored to restore and maintain your health."]
].map((s, i) => ({ n: i + 1, title: s[0], body: s[1] }));
export const why = [
  ['Experienced Professionals','Our team consists of highly trained chiropractors with years of experience in treating various conditions.'],
  ['Personalized Treatment',"We develop individualized treatment plans tailored to each patient's specific needs and conditions."],
  ['Comprehensive Approach','We combine various techniques to provide comprehensive care addressing the root cause of your problems.'],
  ['Advanced Technology','We utilize state-of-the-art equipment and techniques to ensure effective and efficient treatment.']
].map((w, i) => ({ n: '0' + (i + 1), title: w[0], body: w[1] }));
const qs = ['What is a chiropractor in Lenexa, and how can they help me?','Do you accept health insurance?','What are soft tissue injuries, and how are they treated?','Can you help with knee pain caused by a strain or sprain?','Can you explain how your services benefit patients with a nervous system disorder?','What is the connection between nutrition and chiropractic care?','How do you approach pediatric care?','Do you offer treatments for patients dealing with dizziness or brain-related issues?','What should I look for when choosing a chiropractor in Lenexa?'];
const ans = ["A chiropractor in Lenexa specializes in diagnosing and treating musculoskeletal issues, such as low back pain and sports injuries. They use various techniques to enhance your range of motion and overall wellness.","Yes, we accept various health insurance plans. Please contact us for specific information about your coverage.","Soft tissue injuries involve damage to muscles, ligaments, or tendons. We use techniques such as dry needling and physical therapy to help heal these injuries and alleviate pain.","Yes, we treat knee soreness resulting from strains or sprains using techniques that promote healing and improve joint function.","Our services, including adjustments and acupuncture, can help manage symptoms associated with nervous system disorders by improving nerve function and reducing stress on the central nervous system.","Proper nutrition supports overall health and can enhance the effectiveness of treatments by promoting healing and reducing inflammation.","We offer care for children to support healthy development and address issues such as posture problems or sports injuries, always with a focus on gentle and safe techniques.","Yes, we provide treatments that may help with dizziness by addressing underlying musculoskeletal issues and supporting overall neurological health.","When choosing a chiropractor in Lenexa, consider their experience, treatment techniques, and patient reviews. A reputable chiropractor should offer personalized care, use evidence-based practices, and communicate effectively about your treatment plan."];
export const condL = conditions.slice(0, 6);
export const condR = conditions.slice(6);
export const faqItems = qs.map((q, i) => ({ q, a: ans[i] }));
const cities = ['Lenexa','Overland Park','Shawnee','Olathe','Leawood','Prairie Village','Merriam','Mission'];
export const areas = cities.map(n => ({ name: n, href: '/areas/' + n.toLowerCase().replace(/ /g, '-') + '/' }))
  .concat([{ name: 'Kansas City area', href: '#' }, { name: 'Lake Quivira', href: '#' }]);
