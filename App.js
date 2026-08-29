import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Linking } from 'react-native';

export default function App() {
  const [userRole, setUserRole] = useState(null); // يحدد ما إذا تم اختيار 'teacher' أو 'student' أو null (شاشة البداية)
  const [tab, setTab] = useState('معلومات');
  const [menuVisible, setMenuVisible] = useState(false);
  const [showMenuOptions, setShowMenuOptions] = useState(false);

  const menuList = [
    'الصفحة الرئيسية', 'رسائل', 'تلاميذ', 'الصف', 
    'التقويم', 'إعدادات التوفر', 'معلومات', 'إحالة صديق', 
    'الأكاديمية', 'ملفي الشخصي', 'إعدادات', 'المجتمع', 
    'البحث عن مدرسين', 'مساعدة'
  ];

  // دالة فتح الواتساب بضغط زر
  const openWhatsApp = () => {
    let phoneNumber = '+201000000000'; // استبدلي الرقم برقمك الخاص مع كود الدولة
    let url = `whatsapp://send?phone=${phoneNumber}`;
    Linking.openURL(url).catch(() => {
      alert('تأكد من تثبيت تطبيق الواتساب على هاتفك');
    });
  };

  const renderContent = () => {
    switch (tab) {
      case 'معلومات':
        return (
          <View>
            <Text style={styles.title}>📊 نظرة عامة - إحصائيات النشاط</Text>
            <Text style={styles.subTextDesc}>لمحة حول نشاطك والأداء العام (آخر 90 يوم - مقارنة من 14 مايو إلى 12 أغسطس).</Text>

            {/* حالة المدرس الممتاز */}
            <View style={styles.badgeBox}>
              <Text style={styles.badgeMainTitle}>مدرس ممتاز (9/9)</Text>
              <Text style={styles.badgeText}>أنت الآن مدرس ممتاز! بصفتك مدرساً ممتازاً، ستصل إلى المزيد من الطلاب مع زيادة ظهورك في نتائج البحث وفرص حجز الدروس التجريبية. إذا كنت قد انضممت إلى برنامج مدرسي الشركات، فستظهر أيضاً للطلاب من الشركات البحثية عن مدرس.</Text>
            </View>
            
            {/* الأرباح والمسيرة */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>💰 الأرباح والمسيرة</Text>
            </View>

            <View style={styles.statsGrid}>
              <View style={styles.statBox}>
                <Text style={styles.statLabel}>إجمالي المدخول المكتسب</Text>
                <Text style={styles.statValue}>$</Text>
                <Text style={styles.statSub}>منذ الانضمام (يونيو 2023)</Text>
              </View>

              <View style={styles.statBox}>
                <Text style={styles.statLabel}>معدل تقييم المراجعات</Text>
                <Text style={styles.statValue}>5.0</Text>
                <Text style={styles.statSub}>اطمح إلى أكثر من 4.8</Text>
              </View>

              <View style={styles.statBox}>
                <Text style={styles.statLabel}>نتيجة الملف</Text>
                <Text style={styles.statValue}>100%</Text>
                <Text style={styles.statSub}>اطمح إلى أكثر من 90</Text>
              </View>

              <View style={styles.statBox}>
                <Text style={styles.statLabel}>يجيب خلال 24 ساعة</Text>
                <Text style={styles.statValue}>100%</Text>
                <Text style={styles.statSub}>اطمح إلى أكثر من 90</Text>
              </View>

              <View style={styles.statBox}>
                <Text style={styles.statLabel}>المراسلة بعد الدرس التجريبي</Text>
                <Text style={styles.statValue}>100%</Text>
                <Text style={styles.statSub}>اطمح إلى أكثر من 90</Text>
              </View>

              <View style={styles.statBox}>
                <Text style={styles.statLabel}>اشترك بعد الدرس التجريبي</Text>
                <Text style={styles.statValue}>100%</Text>
                <Text style={styles.statSub}>اطمح إلى 60</Text>
              </View>

              <View style={styles.statBox}>
                <Text style={styles.statLabel}>الدروس الأسبوعية</Text>
                <Text style={styles.statValue}>57%</Text>
                <Text style={styles.statSub}>اطمح إلى 75</Text>
              </View>

              <View style={styles.statBox}>
                <Text style={styles.statLabel}>دروس في الصف</Text>
                <Text style={styles.statValue}>97%</Text>
                <Text style={styles.statSub}>اطمح إلى أكثر من 75</Text>
              </View>

              <View style={styles.statBox}>
                <Text style={styles.statLabel}>دروس أعدت جدولتها</Text>
                <Text style={styles.statValue}>0%</Text>
                <Text style={styles.statSub}>اطمح إلى أقل من 10</Text>
              </View>

              <View style={styles.statBox}>
                <Text style={styles.statLabel}>دروس ألغيتها</Text>
                <Text style={styles.statValue}>0%</Text>
                <Text style={styles.statSub}>اطمح إلى أقل من 5</Text>
              </View>

              <View style={styles.statBox}>
                <Text style={styles.statLabel}>إجمالي الدروس التي تغيبت عنها</Text>
                <Text style={styles.statValue}>0</Text>
                <Text style={styles.statSub}>اطمح لتحقيق 0</Text>
              </View>
            </View>
          </View>
        );

      case 'تلاميذ':
        return (
          <View>
            <Text style={styles.title}>👥 قائمة التلاميذ</Text>
            <Text style={styles.subTextDesc}>إدارة الطلاب والاشتراكات والدروس.</Text>
            
            <View style={styles.studentCard}>
              <View style={styles.studentRow}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.studentName}>مارینا (Marina)</Text>
                  <View style={styles.subTag}><Text style={styles.subTagText}>اشتراك</Text></View>
                </View>
                <TouchableOpacity onPress={() => setShowMenuOptions(!showMenuOptions)} style={styles.dotsBtn}>
                  <Text style={styles.dotsText}>•••</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.subText}>الدرس التالي: 13 أغسطس | دروس: 12/12</Text>

              {showMenuOptions && (
                <View style={styles.dropdown}>
                  <Text style={styles.dropItem}>💬 أرسل رسالة</Text>
                  <Text style={styles.dropItem}>📅 جدولة</Text>
                  <Text style={styles.dropItem}>💻 ادخل الصف</Text>
                  <Text style={styles.dropItem}>💰 تغيير السعر</Text>
                  <Text style={styles.dropItem}>📋 مشاركة الخطوات التالية</Text>
                  <Text style={styles.dropItem}>⭐ ترك تعليق</Text>
                  <Text style={styles.dropItem}>✏️ إعادة تسمية</Text>
                  <Text style={[styles.dropItem, {color: 'red', borderBottomWidth: 0}]}>📦 الأرشيف</Text>
                </View>
              )}
            </View>
          </View>
        );

      case 'التقويم':
        return (
          <View>
            <Text style={styles.title}>📅 التقويم والمواعيد</Text>
            <Text style={styles.subTextDesc}>إدارة المواعيد المتاحة للدروس والجدولة.</Text>
            <View style={styles.inputGroup}>
              <Text style={styles.boldText}>مدة إشعار الدرس التجريبي:</Text>
              <View style={styles.selectBox}><Text style={styles.blueText}>إشعار بمدة 12 ساعة على الأقل</Text></View>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.boldText}>مدة إشعار الدروس الاعتيادية:</Text>
              <View style={styles.selectBox}><Text style={styles.blueText}>إشعار بمدة 6 ساعات على الأقل</Text></View>
            </View>
          </View>
        );

      case 'إعدادات التوفر':
        return (
          <View>
            <Text style={styles.title}>⏰ إعدادات التوفر والمنطقة الزمنية</Text>
            <View style={styles.rowBox}>
              <Text style={styles.boldText}>المنطقة الزمنية:</Text>
              <Text style={styles.blueText}>(GMT+3) - القاهرة، مصر</Text>
            </View>
          </View>
        );

      default:
        return (
          <View>
            <Text style={styles.title}>قسم: {tab}</Text>
            <Text style={styles.subTextDesc}>هذا القسم جاهز ويعمل بكفاءة.</Text>
          </View>
        );
    }
  };

  // 1. شاشة اختيار الدور (تظهر أول ما يفتح التطبيق)
  if (userRole === null) {
    return (
      <View style={styles.welcomeContainer}>
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeEmoji}>🎓</Text>
          <Text style={styles.welcomeTitle}>أهلاً بك في منصتنا التعليمية</Text>
          <Text style={styles.welcomeSubtitle}>منصتك العالمية للتعليم الذكي. من أنت؟</Text>

          {/* زر المعلم */}
          <TouchableOpacity style={styles.roleButtonTeacher} onPress={() => setUserRole('teacher')}>
            <Text style={styles.roleButtonText}>👨‍🏫 أنا معلم (أريد إدارة دروسي وتلاميذي)</Text>
          </TouchableOpacity>

          {/* زر الطالب */}
          <TouchableOpacity style={styles.roleButtonStudent} onPress={() => setUserRole('student')}>
            <Text style={styles.roleButtonText}>👩‍🎓 أنا طالب (أريد تصفح المدرسين والحجز)</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // 2. واجهة الطالب البسيطة
  if (userRole === 'student') {
    return (
      <View style={styles.container}>
        <View style={styles.topBarStudent}>
          <Text style={styles.studentHeaderTitle}>📚 بوابة الطلاب</Text>
          <TouchableOpacity onPress={() => setUserRole(null)} style={styles.backButton}>
            <Text style={styles.backButtonText}>الرجوع للخلف</Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.contentArea}>
          <View style={styles.card}>
            <Text style={styles.title}>مرحباً بك أيها الطالب العزيز!</Text>
            <Text style={styles.subTextDesc}>ابحث عن أفضل المدرسين واحجز حصتك بكل سهولة.</Text>
          </View>
          <TouchableOpacity style={styles.whatsappButton} onPress={openWhatsApp}>
            <Text style={styles.whatsappButtonText}>💬 تواصل معنا عبر واتساب</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }

  // 3. واجهة المعلم الكاملة (تضم كل الكود الذي أرسلتيه مع زر الخروج للعودة للاختيار)
  return (
    <View style={styles.container}>
      <View style={styles.teacherTopBar}>
        {/* زر القائمة المنسدلة العلوي للموبايل */}
        <TouchableOpacity style={styles.headerButton} onPress={() => setMenuVisible(!menuVisible)}>
          <Text style={styles.headerButtonText}>☰ القائمة (اختر القسم: {tab})</Text>
        </TouchableOpacity>
        {/* زر العودة لاختيار الدور */}
        <TouchableOpacity onPress={() => setUserRole(null)} style={styles.switchRoleBtn}>
          <Text style={styles.switchRoleText}>خروج</Text>
        </TouchableOpacity>
      </View>

      {/* قائمة الأقسام المنسدلة */}
      {menuVisible && (
        <ScrollView style={styles.menuDrawer}>
          <TouchableOpacity style={styles.shareBtn}>
            <Text style={styles.shareBtnText}>مشاركة ملفي الشخصي</Text>
          </TouchableOpacity>
          {menuList.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={[styles.menuItem, tab === item && styles.activeMenuBg]} 
              onPress={() => { setTab(item); setMenuVisible(false); }}
            >
              <Text style={[styles.menuItemText, tab === item && styles.activeText]}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      {/* منطقة المحتوى */}
      <ScrollView contentContainerStyle={styles.contentArea}>
        <View style={styles.card}>
          {renderContent()}
        </View>

        {/* زر التواصل السريع عبر واتساب مضاف في أسفل الصفحة */}
        <TouchableOpacity style={styles.whatsappButton} onPress={openWhatsApp}>
          <Text style={styles.whatsappButtonText}>💬 تواصل معنا عبر واتساب</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f6f9', paddingTop: 35 },
  welcomeContainer: { flex: 1, backgroundColor: '#007AFF', justifyContent: 'center', alignItems: 'center', padding: 20 },
  welcomeCard: { backgroundColor: '#fff', width: '100%', maxWidth: 400, padding: 25, borderRadius: 16, alignItems: 'center', elevation: 5 },
  welcomeEmoji: { fontSize: 50, marginBottom: 15 },
  welcomeTitle: { fontSize: 20, fontWeight: 'bold', color: '#222', textAlign: 'center', marginBottom: 8 },
  welcomeSubtitle: { fontSize: 13, color: '#666', textAlign: 'center', marginBottom: 25 },
  roleButtonTeacher: { backgroundColor: '#007AFF', width: '100%', padding: 14, borderRadius: 10, alignItems: 'center', marginBottom: 12 },
  roleButtonStudent: { backgroundColor: '#10B981', width: '100%', padding: 14, borderRadius: 10, alignItems: 'center', marginBottom: 10 },
  roleButtonText: { color: '#fff', fontSize: 14, fontWeight: 'bold' },

  teacherTopBar: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, marginBottom: 5 },
  headerButton: { flex: 1, backgroundColor: '#007AFF', padding: 12, borderRadius: 8, marginRight: 8 },
  headerButtonText: { color: '#fff', fontSize: 15, fontWeight: 'bold', textAlign: 'center' },
  switchRoleBtn: { backgroundColor: '#ef4444', padding: 12, borderRadius: 8, justifyContent: 'center' },
  switchRoleText: { color: '#fff', fontSize: 12, fontWeight: 'bold' },

  topBarStudent: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', padding: 15, borderBottomWidth: 1, borderColor: '#ddd' },
  studentHeaderTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  backButton: { backgroundColor: '#6b7280', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 6 },
  backButtonText: { color: '#fff', fontSize: 12 },

  menuDrawer: { backgroundColor: '#fff', marginHorizontal: 12, maxHeight: 280, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, marginBottom: 10, padding: 5 },
  shareBtn: { backgroundColor: '#f8f9fa', padding: 10, borderRadius: 6, borderWidth: 1, borderColor: '#ccc', alignItems: 'center', marginBottom: 5 },
  shareBtnText: { fontSize: 13, fontWeight: 'bold', color: '#333' },
  menuItem: { padding: 12, borderBottomWidth: 1, borderColor: '#f1f1f1' },
  activeMenuBg: { backgroundColor: '#eef2ff', borderRadius: 6 },
  menuItemText: { fontSize: 14, color: '#444' },
  activeText: { color: '#007AFF', fontWeight: 'bold' },
  contentArea: { padding: 12 },
  card: { padding: 15, backgroundColor: '#fff', borderRadius: 10, borderWidth: 1, borderColor: '#ddd', marginBottom: 15 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 8, color: '#222' },
  subTextDesc: { fontSize: 13, color: '#666', marginBottom: 15 },
  badgeBox: { backgroundColor: '#fdf2f8', padding: 12, borderRadius: 8, borderWidth: 1, borderColor: '#fbcfe8', marginBottom: 15 },
  badgeMainTitle: { fontSize: 15, fontWeight: 'bold', color: '#be185d', marginBottom: 5 },
  badgeText: { fontSize: 12, color: '#831843', lineHeight: 18 },
  sectionHeader: { marginTop: 10, marginBottom: 10, borderBottomWidth: 1, borderColor: '#eee', paddingBottom: 5 },
  sectionTitle: { fontSize: 15, fontWeight: 'bold', color: '#333' },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  statBox: { width: '48%', backgroundColor: '#fafafa', padding: 12, borderRadius: 8, borderWidth: 1, borderColor: '#e5e7eb', marginBottom: 12 },
  statLabel: { fontSize: 12, color: '#555', marginBottom: 4 },
  statValue: { fontSize: 20, fontWeight: 'bold', color: '#007AFF', marginBottom: 4 },
  statSub: { fontSize: 10, color: '#888' },
  studentCard: { backgroundColor: '#fafafa', padding: 12, borderRadius: 8, borderWidth: 1, borderColor: '#e5e7eb' },
  studentRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  studentName: { fontSize: 15, fontWeight: 'bold', color: '#333', marginRight: 10 },
  subTag: { backgroundColor: '#e0f2fe', paddingVertical: 2, paddingHorizontal: 6, borderRadius: 4 },
  subTagText: { fontSize: 10, color: '#0369a1', fontWeight: 'bold' },
  dotsBtn: { padding: 8, backgroundColor: '#eee', borderRadius: 5 },
  dotsText: { fontSize: 14, fontWeight: 'bold' },
  subText: { fontSize: 12, color: '#666', marginTop: 8 },
  dropdown: { marginTop: 10, backgroundColor: '#fff', borderRadius: 6, borderWidth: 1, borderColor: '#ddd', padding: 5 },
  dropItem: { padding: 8, fontSize: 12, borderBottomWidth: 1, borderColor: '#f1f1f1', color: '#333' },
  inputGroup: { marginBottom: 12 },
  selectBox: { padding: 10, backgroundColor: '#fafafa', borderRadius: 8, borderWidth: 1, borderColor: '#ddd', marginTop: 4 },
  rowBox: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: '#fafafa', borderRadius: 6, marginBottom: 8, borderWidth: 1, borderColor: '#eee' },
  boldText: { fontWeight: 'bold', color: '#333', fontSize: 13 },
  blueText: { color: '#007AFF', fontWeight: 'bold', fontSize: 13 },
  whatsappButton: {
    backgroundColor: '#25D366',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3,
  },
  whatsappButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});