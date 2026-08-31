import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Linking } from 'react-native';

export default function App() {
  const [userRole, setUserRole] = useState(null);
  const [tab, setTab] = useState('إعدادات التوفر');
  const [menuVisible, setMenuVisible] = useState(false);
  const [saveStatus, setSaveStatus] = useState(false);

  // قائمة الساعات الواضحة من 00:00 إلى 24:00
  const hoursList = [
    '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', 
    '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', 
    '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', 
    '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'
  ];

  const menuList = [
    'الصفحة الرئيسية', 'رسائل', 'تلاميذ', 'الصف', 
    'التقويم', 'إعدادات التوفر', 'معلومات', 'إحالة صديق', 
    'الأكاديمية', 'ملفي الشخصي', 'إعدادات', 'مساعدة'
  ];

  const [availability, setAvailability] = useState([
    { name: 'الإثنين', times: [{ from: '09:00', to: '17:00' }], showPicker: false, selectedFrom: '09:00', selectedTo: '17:00' },
    { name: 'الثلاثاء', times: [{ from: '09:00', to: '17:00' }], showPicker: false, selectedFrom: '09:00', selectedTo: '17:00' },
    { name: 'الأربعاء', times: [{ from: '09:00', to: '17:00' }], showPicker: false, selectedFrom: '09:00', selectedTo: '17:00' },
    { name: 'الخميس', times: [{ from: '09:00', to: '17:00' }], showPicker: false, selectedFrom: '09:00', selectedTo: '17:00' },
    { name: 'الجمعة', times: [{ from: '09:00', to: '17:00' }], showPicker: false, selectedFrom: '09:00', selectedTo: '17:00' },
    { name: 'السبت', times: [{ from: '09:00', to: '17:00' }], showPicker: false, selectedFrom: '09:00', selectedTo: '17:00' },
    { name: 'الأحد', times: [{ from: '09:00', to: '17:00' }], showPicker: false, selectedFrom: '09:00', selectedTo: '17:00' },
  ]);

  const togglePicker = (dayIndex) => {
    const updated = [...availability];
    updated[dayIndex].showPicker = !updated[dayIndex].showPicker;
    setAvailability(updated);
  };

  const setFromHour = (dayIndex, hour) => {
    const updated = [...availability];
    updated[dayIndex].selectedFrom = hour;
    setAvailability(updated);
  };

  const setToHour = (dayIndex, hour) => {
    const updated = [...availability];
    updated[dayIndex].selectedTo = hour;
    setAvailability(updated);
  };

  const confirmAddSlot = (dayIndex) => {
    const updated = [...availability];
    const day = updated[dayIndex];
    day.times.push({ from: day.selectedFrom, to: day.selectedTo });
    day.showPicker = false;
    setAvailability(updated);
  };

  const handleSaveAvailability = () => {
    setSaveStatus(true);
    setTimeout(() => setSaveStatus(false), 3000);
  };

  const openWhatsApp = () => {
    Linking.openURL('whatsapp://send?phone=+201000000000').catch(() => {
      alert('تأكد من تثبيت تطبيق الواتساب على هاتفك');
    });
  };

  const renderContent = () => {
    switch (tab) {
      case 'إعدادات التوفر':
        return (
          <View>
            <Text style={styles.title}>⏰ إعدادات التوفر والمنطقة الزمنية</Text>
            <Text style={styles.subTextDesc}>اضغط على "+ إضافة موعد" لتظهر لك لوحة اختيار الساعات بوضوح تام.</Text>
            
            <View style={styles.rowBox}>
              <Text style={styles.boldText}>المنطقة الزمنية:</Text>
              <Text style={styles.blueText}>(GMT+3) - Africa, Cairo</Text>
            </View>

            {saveStatus && (
              <View style={styles.successBox}>
                <Text style={styles.successText}>✅ تم حفظ إعدادات التوفر بنجاح!</Text>
              </View>
            )}

            {availability.map((day, dayIndex) => (
              <View key={dayIndex} style={styles.dayCard}>
                <View style={styles.dayHeaderRow}>
                  <Text style={styles.dayTitle}>☑️ {day.name}</Text>
                  
                  {/* زرار إضافة الموعد الواضح والصريح */}
                  <TouchableOpacity style={styles.addSlotBtn} onPress={() => togglePicker(dayIndex)}>
                    <Text style={styles.addSlotBtnText}>
                      {day.showPicker ? 'إغلاق القائمة ✕' : '+ إضافة موعد'}
                    </Text>
                  </TouchableOpacity>
                </View>

                {/* المواعيد الحالية */}
                {day.times.map((timeSlot, tIndex) => (
                  <View key={tIndex} style={styles.timeSlotRow}>
                    <Text style={styles.timeLabel}>من: <Text style={styles.blueText}>{timeSlot.from}</Text></Text>
                    <Text style={styles.timeLabel}>إلى: <Text style={styles.blueText}>{timeSlot.to}</Text></Text>
                  </View>
                ))}

                {/* لوحة الاختيار المباشرة والواضحة */}
                {day.showPicker && (
                  <View style={styles.pickerBox}>
                    <Text style={styles.pickerMainTitle}>اختر ساعة البداية:</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={true} style={styles.hoursScroll}>
                      {hoursList.map((h, hIdx) => (
                        <TouchableOpacity 
                          key={hIdx} 
                          style={[styles.hourChip, day.selectedFrom === h && styles.selectedHourChip]}
                          onPress={() => setFromHour(dayIndex, h)}
                        >
                          <Text style={[styles.hourChipText, day.selectedFrom === h && styles.selectedHourText]}>{h}</Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>

                    <Text style={styles.pickerMainTitle}>اختر ساعة النهاية:</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={true} style={styles.hoursScroll}>
                      {hoursList.map((h, hIdx) => (
                        <TouchableOpacity 
                          key={hIdx} 
                          style={[styles.hourChip, day.selectedTo === h && styles.selectedHourChip]}
                          onPress={() => setToHour(dayIndex, h)}
                        >
                          <Text style={[styles.hourChipText, day.selectedTo === h && styles.selectedHourText]}>{h}</Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>

                    <TouchableOpacity 
                      style={styles.confirmAddBtn} 
                      onPress={() => confirmAddSlot(dayIndex)}
                    >
                      <Text style={styles.confirmAddBtnText}>تأكيد وإضافة الموعد (من {day.selectedFrom} إلى {day.selectedTo})</Text>
                    </TouchableOpacity>
                  </View>
                )}
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
            <Text style={styles.subTextDesc}>لمحة شاملة حول نشاطك والأداء والتقييمات العامة.</Text>
            <View style={styles.badgeBox}>
              <Text style={styles.badgeMainTitle}>مدرس ممتاز (9/9)</Text>
              <Text style={styles.badgeText}>أنتِ الآن مدرس ممتاز! ستصلين إلى المزيد من الطلاب مع زيادة ظهورك.</Text>
            </View>
          </View>
        );

      case 'تلاميذ':
        return (
          <View>
            <Text style={styles.title}>👥 قائمة التلاميذ</Text>
            <Text style={styles.subTextDesc}>إدارة الطلاب والاشتراكات ومواعيد الحصص القادمة.</Text>
            <View style={styles.studentCard}>
              <Text style={styles.studentName}>مارینا (Marina)</Text>
              <Text style={styles.subText}>الدرس التالي: اللغة العربية ومتابعة المنهج</Text>
            </View>
          </View>
        );

      case 'الصفحة الرئيسية':
        return (
          <View>
            <Text style={styles.title}>🏠 الصفحة الرئيسية للمنصة</Text>
            <Text style={styles.subTextDesc}>مرحباً بكِ مجدداً يا مرسى في لوحة التحكم الخاصة بك.</Text>
          </View>
        );

      case 'رسائل':
        return (
          <View>
            <Text style={styles.title}>💬 الرسائل والمحادثات</Text>
            <Text style={styles.subTextDesc}>تواصلك المباشر مع الطلاب وأولياء الأمور لاستفسارات الدروس.</Text>
          </View>
        );

      case 'التقويم':
        return (
          <View>
            <Text style={styles.title}>📅 التقويم وجدول الحصص</Text>
            <Text style={styles.subTextDesc}>متابعة المواعيد المحجوزة والجدول الأسبوعي بدقة.</Text>
          </View>
        );

      default:
        return (
          <View>
            <Text style={styles.title}>قسم: {tab}</Text>
            <Text style={styles.subTextDesc}>هذا القسم جاهز ويعمل بكفاءة تامة.</Text>
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
          <Text style={styles.headerButtonText}>☰ القائمة (القسم الحالي: {tab})</Text>
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

  menuDrawer: { backgroundColor: '#fff', marginHorizontal: 12, maxHeight: 300, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, marginBottom: 10, padding: 5 },
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
  dayHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  dayTitle: { fontSize: 15, fontWeight: 'bold', color: '#222' },
  addSlotBtn: { backgroundColor: '#10B981', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 6 },
  addSlotBtnText: { color: '#fff', fontSize: 13, fontWeight: 'bold' },
  timeSlotRow: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', padding: 8, borderRadius: 6, borderWidth: 1, borderColor: '#eee', marginBottom: 6 },
  timeLabel: { fontSize: 13, color: '#444' },

  pickerBox: { backgroundColor: '#f0fdf4', padding: 15, borderRadius: 8, marginTop: 10, borderWidth: 2, borderColor: '#10B981' },
  pickerMainTitle: { fontSize: 14, fontWeight: 'bold', color: '#166534', marginBottom: 8, marginTop: 6 },
  hoursScroll: { marginBottom: 10, paddingVertical: 4 },
  hourChip: { backgroundColor: '#fff', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 6, borderWidth: 1, borderColor: '#cbd5e1', marginRight: 6 },
  selectedHourChip: { backgroundColor: '#007AFF', borderColor: '#007AFF' },
  hourChipText: { fontSize: 13, color: '#333', fontWeight: 'bold' },
  selectedHourText: { color: '#fff' },
  confirmAddBtn: { backgroundColor: '#10B981', padding: 12, borderRadius: 6, alignItems: 'center', marginTop: 10 },
  confirmAddBtnText: { color: '#fff', fontSize: 13, fontWeight: 'bold' },
  
  successBox: { backgroundColor: '#d1e7dd', padding: 10, borderRadius: 6, marginBottom: 12, borderWidth: 1, borderColor: '#badbcc' },
  successText: { color: '#0f5132', fontSize: 13, fontWeight: 'bold', textAlign: 'center' },
  saveButton: { backgroundColor: '#007AFF', paddingVertical: 14, borderRadius: 10, alignItems: 'center', marginTop: 10, marginBottom: 10 },
  saveButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },

  rowBox: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: '#fafafa', borderRadius: 6, marginBottom: 12, borderWidth: 1, borderColor: '#eee' },
  boldText: { fontWeight: 'bold', color: '#333', fontSize: 13 },
  blueText: { color: '#007AFF', fontWeight: 'bold', fontSize: 13 },
  
  badgeBox: { backgroundColor: '#f0fdf4', padding: 15, borderRadius: 8, borderWidth: 1, borderColor: '#bbf7d0' },
  badgeMainTitle: { fontSize: 16, fontWeight: 'bold', color: '#166534', marginBottom: 6 },
  badgeText: { fontSize: 13, color: '#15803d' },

  studentCard: { backgroundColor: '#fafafa', padding: 12, borderRadius: 8, borderWidth: 1, borderColor: '#e5e7eb' },
  studentName: { fontSize: 15, fontWeight: 'bold', color: '#333', marginBottom: 4 },
  subText: { fontSize: 12, color: '#666' },

  whatsappButton: { backgroundColor: '#25D366', paddingVertical: 14, borderRadius: 10, alignItems: 'center', marginBottom: 20 },
  whatsappButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});
