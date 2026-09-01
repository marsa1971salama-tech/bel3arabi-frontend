import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';

export default function InfoScreen() {
  // بنية جاهزة لاستقبال البيانات أوتوماتيك من المنصة
  const [platformData, setPlatformData] = useState({
    earnings: '--',
    rescheduledLessons: '--',
    cancelledLessons: '--',
    missedLessons: '--',
    weeklyLessons: '--',
    preplyLessons: '--',
    answersIn24h: '--',
    trialMessageRate: '--',
    mostRequestedTimes: '--',
    ratingAverage: '--',
    profileScore: '--',
    lessonPrice: '--',
    newSubscriptions: '--',
    trialLessonsCount: '--',
    profileViews: '--',
    teachingHours: '--'
  });

  const [loading, setLoading] = useState(false);

  // هنا هيتم ربط الـ API مستقبلاً عشان التحديث التلقائي
  useEffect(() => {
    // محاكاة الاتصال بالمنصة لجلب التحديثات أوتوماتيك
    // fetchPlatformDataFromApi();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.contentArea}>
      {/* العنوان الرئيسي */}
      <View style={styles.headerContainer}>
        <Text style={styles.mainHeader}>📊 نظرة عامة - إحصائيات النشاط</Text>
        <Text style={styles.subTextDesc}>لمحة شاملة حول نشاطك، الأداء، والتقييمات العامة المتحدثة مباشرة من المنصة.</Text>
      </View>
      
      {/* فلتر الوقت */}
      <View style={styles.dateFilterBox}>
        <Text style={styles.dateFilterText}>📅 آخر 90 يوم ▼</Text>
      </View>

      {/* قسم المكاسب */}
      <View style={styles.infoCardItem}>
        <Text style={styles.infoCardTitle}>مكاسب (آخر 90 يوم)</Text>
        <Text style={styles.infoCardValue}>{platformData.earnings}</Text>
        <Text style={styles.subText}>تتحدث تلقائياً حسب نشاطك والفترة الزمنية.</Text>
      </View>

      {/* قسم أسرار النجاح الرئيسي */}
      <Text style={styles.sectionTitle}>⭐ أسرار النجاح</Text>
      <Text style={styles.subTextDesc}>إحصائيات أداءك لمساعدة على جذب الطلاب وتطوير العمل.</Text>

      <View style={styles.infoCardItem}>
        <Text style={styles.infoCardTitle}>دروس أعدت جدولتها</Text>
        <Text style={styles.infoCardValue}>{platformData.rescheduledLessons}</Text>
        <Text style={styles.subText}>اطمح إلى أقل من 10%</Text>
      </View>

      <View style={styles.infoCardItem}>
        <Text style={styles.infoCardTitle}>دروس ألغيتها</Text>
        <Text style={styles.infoCardValue}>{platformData.cancelledLessons}</Text>
        <Text style={styles.subText}>اطمح إلى أقل من 5%</Text>
      </View>

      <View style={styles.infoCardItem}>
        <Text style={styles.infoCardTitle}>إجمالي الدروس التي تغيبت عنها</Text>
        <Text style={styles.infoCardValue}>{platformData.missedLessons}</Text>
        <Text style={styles.subText}>اطمح إلى 0</Text>
      </View>

      <View style={styles.infoCardItem}>
        <Text style={styles.infoCardTitle}>الدروس الأسبوعية</Text>
        <Text style={styles.infoCardValue}>{platformData.weeklyLessons}</Text>
        <Text style={styles.subText}>اطمح إلى أكثر من 75%</Text>
      </View>

      <View style={styles.infoCardItem}>
        <Text style={styles.infoCardTitle}>الدروس فى صف Preply</Text>
        <Text style={styles.infoCardValue}>{platformData.preplyLessons}</Text>
        <Text style={styles.subText}>اطمح إلى أكثر من 75%</Text>
      </View>

      <View style={styles.infoCardItem}>
        <Text style={styles.infoCardTitle}>إجابات خلال 24 ساعة</Text>
        <Text style={styles.infoCardValue}>{platformData.answersIn24h}</Text>
        <Text style={styles.subText}>اطمح إلى أكثر من 90%</Text>
      </View>

      <View style={styles.infoCardItem}>
        <Text style={styles.infoCardTitle}>المراسلة بعد الدرس التجريبي</Text>
        <Text style={styles.infoCardValue}>{platformData.trialMessageRate}</Text>
        <Text style={styles.subText}>اطمح إلى أكثر من 90%</Text>
      </View>

      <View style={styles.infoCardItem}>
        <Text style={styles.infoCardTitle}>المواعيد الأكثر طلبًا</Text>
        <Text style={styles.infoCardValue}>{platformData.mostRequestedTimes}</Text>
        <Text style={styles.subText}>اطمح إلى أكثر من 80 موعداً</Text>
      </View>

      <View style={styles.infoCardItem}>
        <Text style={styles.infoCardTitle}>معدل التقييمات</Text>
        <Text style={styles.infoCardValue}>{platformData.ratingAverage}</Text>
        <Text style={styles.subText}>اطمح إلى أكثر من 4.8</Text>
      </View>

      <View style={styles.infoCardItem}>
        <Text style={styles.infoCardTitle}>نتيجه الملف الشخصي</Text>
        <Text style={styles.infoCardValue}>{platformData.profileScore}</Text>
        <Text style={styles.subText}>اطمح إلى أكثر من 90%</Text>
      </View>

      <View style={styles.infoCardItem}>
        <Text style={styles.infoCardTitle}>السعر للدرس</Text>
        <Text style={styles.infoCardValue}>{platformData.lessonPrice}</Text>
      </View>

      {/* قسم اشتراكات جديدة والنشاط الثلاثي */}
      <Text style={styles.sectionTitle}>📈 اشتراكات جديدة</Text>
      <View style={styles.tripleStatsRow}>
        <View style={styles.tripleStatItem}>
          <Text style={styles.tripleLabel}>اشتراكات جديدة</Text>
          <Text style={styles.tripleVal}>{platformData.newSubscriptions}</Text>
        </View>
        <View style={styles.tripleStatItem}>
          <Text style={styles.tripleLabel}>دروس تجريبية</Text>
          <Text style={styles.tripleVal}>{platformData.trialLessonsCount}</Text>
        </View>
        <View style={styles.tripleStatItem}>
          <Text style={styles.tripleLabel}>مشاهدة ملفك</Text>
          <Text style={styles.tripleVal}>{platformData.profileViews}</Text>
        </View>
      </View>

      {/* قسم شارة مدرس ممتاز */}
      <View style={styles.badgeBox}>
        <Text style={styles.badgeMainTitle}>مدرس ممتاز (9/9)</Text>
        <Text style={styles.badgeText}>تهانينا بصفتك مدرسًا ممتازًا، ستصل إلى المزيد من الطلاب مع زيادة ظهورك في نتائج البحث.</Text>
      </View>

      {/* مسيرتك في التعليم */}
      <View style={styles.infoCardItem}>
        <Text style={styles.infoCardTitle}>💪 مسيرتك في التعليم</Text>
        <Text style={styles.infoCardValue}>{platformData.teachingHours}</Text>
        <Text style={styles.subText}>ساعة تعليم تتحدث تلقائياً مع تقدمك على المنصة.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentArea: { padding: 15, backgroundColor: '#fdfdfd' },
  headerContainer: { marginBottom: 10 },
  mainHeader: { fontSize: 18, fontWeight: 'bold', marginBottom: 4, color: '#111' },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginTop: 20, marginBottom: 8, color: '#111' },
  subTextDesc: { fontSize: 12, color: '#666', marginBottom: 12 },
  dateFilterBox: { backgroundColor: '#eef2ff', padding: 8, borderRadius: 6, alignSelf: 'flex-start', marginBottom: 12 },
  dateFilterText: { fontSize: 12, fontWeight: 'bold', color: '#1e40af' },
  infoCardItem: { backgroundColor: '#ffffff', padding: 14, borderRadius: 8, borderWidth: 1, borderColor: '#e5e7eb', marginBottom: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1 },
  infoCardTitle: { fontSize: 13, fontWeight: 'bold', color: '#333', marginBottom: 4 },
  infoCardValue: { fontSize: 18, fontWeight: 'bold', color: '#007AFF', marginBottom: 4 },
  subText: { fontSize: 11, color: '#666' },
  tripleStatsRow: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 8, padding: 12, marginBottom: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1 },
  tripleStatItem: { flex: 1, alignItems: 'center' },
  tripleLabel: { fontSize: 11, color: '#666', textAlign: 'center', marginBottom: 4 },
  tripleVal: { fontSize: 15, fontWeight: 'bold', color: '#007AFF' },
  badgeBox: { backgroundColor: '#f0fdf4', padding: 14, borderRadius: 8, borderWidth: 1, borderColor: '#bbf7d0', marginBottom: 12 },
  badgeMainTitle: { fontSize: 15, fontWeight: 'bold', color: '#166534', marginBottom: 6 },
  badgeText: { fontSize: 12, color: '#15803d', lineHeight: 18 }
});
