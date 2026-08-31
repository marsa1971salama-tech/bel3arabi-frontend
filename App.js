import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Linking } from 'react-native';

const API_URL = 'https://bel3arabi-backend-production.up.railway.app';

export default function App() {
  const [userRole, setUserRole] = useState(null);
  const [tab, setTab] = useState('إعدادات التوفر');
  const [menuVisible, setMenuVisible] = useState(false);
  const [showMenuOptions, setShowMenuOptions] = useState(false);
  const [saveStatus, setSaveStatus] = useState(false);

  const menuList = [
    'الصفحة الرئيسية', 'رسائل', 'تلاميذ', 'الصف', 
    'التقويم', 'إعدادات التوفر', 'معلومات', 'إحالة صديق', 
    'الأكاديمية', 'ملفي الشخصي', 'إعدادات', 'المجتمع', 
    'البحث عن مدرسين', 'مساعدة'
  ];

  const daysList = [
    { id: 'monday', name: 'الإثنين', times: ['00:00 إلى 03:00', '06:00 إلى 24:00'] },
    { id: 'tuesday', name: 'الثلاثاء', times: ['00:00 إلى 03:00', '06:00 إلى 24:00'] },
    { id: 'wednesday', name: 'الأربعاء', times: ['00:00 إلى 03:00', '06:00 إلى 24:00'] },
    { id: 'thursday', name: 'الخميس', times: ['00:00 إلى 03:00', '06:00 إلى 24:00'] },
    { id: 'friday', name: 'الجمعة', times: ['00:00 إلى 03:00', '06:00 إلى 24:00'] },
    { id: 'saturday', name: 'السبت', times: ['00:00 إلى 03:00', '06:00 إلى 24:00'] },
    { id: 'sunday', name: 'الأحد', times: ['00:00 إلى 02:00', '11:30 إلى 24:00'] },
  ];

  const openWhatsApp = () => {
    let phoneNumber = '+201000000000';
    let url = `whatsapp://send?phone=${phoneNumber}`;
    Linking.openURL(url).catch(() => {
      alert('تأكد من تثبيت تطبيق الواتساب على هاتفك');
    });
  };

  const handleSaveAvailability = () => {
    setSaveStatus(true);
    setTimeout(() => setSaveStatus(false), 3000);
  };

  const renderContent = () => {
    switch (tab) {
      case 'إعدادات التوفر':
        return (
          <View>
            <Text style={styles.title}>⏰ إعدادات التوفر والمنطقة الزمنية</Text>
            <Text style={styles.subTextDesc}>التوفر يظهر ساعات العمل المحتملة. يمكن للطلاب حجز دروس في هذه الأوقات.</Text>
            
            <View style={styles.rowBox}>
              <Text style={styles.boldText}>المنطقة الزمنية:</Text>
              <Text style={styles.blueText}>(GMT+3) - Africa, Cairo</Text>
            </View>

            {saveStatus && (
              <View style={styles.successBox}>
                <Text style={styles.successText}>✅ تم حفظ إعدادات التوفر بنجاح!</Text>
              </View>
            )}

            {daysList.map((day, index) => (
              <View key={index} style={styles.dayCard}>
                <View style={styles.dayHeaderRow}>
                  <Text style={styles.dayTitle}>☑️ {day.name}</Text>
                </View>
                {day.times.map((timeSlot, tIndex) => (
                  <View key={tIndex} style={styles.timeSlotRow}>
                    <Text style={styles.timeLabel}>من: <Text style={styles.blueText}>{timeSlot.split(' إلى ')[0]}</Text></Text>
                    <Text style={styles.timeLabel}>إلى: <Text style={styles.blueText}>{timeSlot.split(' إلى ')[1]}</Text></Text>
                  </View>
                ))}
                <TouchableOpacity style={styles.addSlotBtn}>
                  <Text style={styles.addSlotText}>+ إضافة موعد</Text>
                </TouchableOpacity>
              </View>
            ))}

            <TouchableOpacity style={styles.saveButton} onPress={handleSaveAvailability}>
              <Text style={styles.saveButtonText}>حفظ التغييرات</Text>
            </TouchableOpacity>
          </View>
        );

      case 'معلومات':
        return (
          <View>
            <Text style={styles.title}>📊 نظرة عامة - إحصائيات النشاط</Text>
            <Text style={styles.subTextDesc}>لمحة حول نشاطك والأداء العام.</Text>
            <View style={styles.badgeBox}>
              <Text style={styles.badgeMainTitle}>مدرس ممتاز (9/9)</Text>
              <Text style={styles.badgeText}>أنت الآن مدرس ممتاز! ستصل إلى المزيد من الطلاب مع زيادة ظهورك.</Text>
            </View>
          </View>
        );

      case 'تلاميذ':
        return (
          <View>
            <Text style={styles.title}>👥 قائمة التلاميذ</Text>
            <Text style={styles.subTextDesc}>إدارة الطلاب والاشتراكات والدروس.</Text>
            <View style={styles.studentCard}>
              <Text style={styles.studentName}>مارینا (Marina)</Text>
              <Text style={styles.subText}>الدرس التالي: 13 أغسطس</Text>
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

  if (userRole === null) {
    return (
      <View style={styles.welcomeContainer}>
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeEmoji}>🎓</Text>
          <Text style={styles.welcomeTitle}>أهلاً بك في منصتنا التعليمية</Text>
          <Text style={styles.welcomeSubtitle}>منصتك العالمية للتعليم الذكي. من أنت؟</Text>
          <TouchableOpacity style={styles.roleButtonTeacher} onPress={() => setUserRole('teacher')}>
            <Text style={styles.roleButtonText}>👨‍🏫 أنا معلم (أريد إدارة دروسي وتلاميذي)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.roleButtonStudent} onPress={() => setUserRole('student')}>
            <Text style={styles.roleButtonText}>👩‍🎓 أنا طالب (أريد تصفح المدرسين والحجز)</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

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

  return (
    <View style={styles.container}>
      <View style={styles.teacherTopBar}>
        <TouchableOpacity style={styles.headerButton} onPress={() => setMenuVisible(!menuVisible)}>
          <Text style={styles.headerButtonText}>☰ القائمة (اختر القسم: {tab})</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setUserRole(null)} style={styles.switchRoleBtn}>
          <Text style={styles.switchRoleText}>خروج</Text>
        </TouchableOpacity>
      </View>

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

      <ScrollView contentContainerStyle={styles.contentArea}>
        <View style={styles.card}>
          {renderContent()}
        </View>

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
  
  dayCard: { backgroundColor: '#fafafa', padding: 12, borderRadius: 8, borderWidth: 1, borderColor: '#e5e7eb', marginBottom: 12 },
  dayHeaderRow: { marginBottom: 8 },
  dayTitle: { fontSize: 15, fontWeight: 'bold', color: '#222' },
  timeSlotRow: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', padding: 8, borderRadius: 6, borderWidth: 1, borderColor: '#eee', marginBottom: 6 },
  timeLabel: { fontSize: 13, color: '#444' },
  addSlotBtn: { marginTop: 4 },
  addSlotText: { fontSize: 12, color: '#007AFF', fontWeight: 'bold' },
  
  successBox: { backgroundColor: '#d1e7dd', padding: 10, borderRadius: 6, marginBottom: 12, borderWidth: 1, borderColor: '#badbcc' },
  successText: { color: '#0f5132', fontSize: 13, fontWeight: 'bold', textAlign: 'center' },
  saveButton: { backgroundColor: '#007AFF', paddingVertical: 14, borderRadius: 10, alignItems: 'center', marginTop: 10, marginBottom: 10 },
  saveButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },

  rowBox: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: '#fafafa', borderRadius: 6, marginBottom: 12, borderWidth: 1, borderColor: '#eee' },
  boldText: { fontWeight: 'bold', color: '#333', fontSize: 13 },
  blueText: { color: '#007AFF', fontWeight: 'bold', fontSize: 13 },
  
  studentCard: { backgroundColor: '#fafafa', padding: 12, borderRadius: 8, borderWidth: 1, borderColor: '#e5e7eb' },
  studentName: { fontSize: 15, fontWeight: 'bold', color: '#333', marginBottom: 4 },
  subText: { fontSize: 12, color: '#666' },

  whatsappButton: { backgroundColor: '#25D366', paddingVertical: 14, borderRadius: 10, alignItems: 'center', marginBottom: 20 },
  whatsappButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});
