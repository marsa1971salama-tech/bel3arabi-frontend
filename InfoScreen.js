import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function InfoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.contentArea}>
      {/* العنوان الرئيسي */}
      <Text style={styles.mainHeader}>📊 نظرة عامة - إحصائيات النشاط</Text>
      <Text style={styles.subTextDesc}>لمحة شاملة حول نشاطك، الأداء، والتقييمات العامة المتحدثة من المنصة.</Text>
      
      {/* فلتر الوقت */}
      <View style={styles.dateFilterBox}>
        <Text style={styles.dateFilterText}>📅 آخر 90 يوم ▼</Text>
      </View>

      {/* قسم المكاسب */}
      <View style={styles.infoCardItem}>
        <Text style={styles.infoCardTitle}>مكاسب (آخر 90 يوم)</Text>
        <Text style={styles.infoCardValue}>--</Text>
        <Text style={styles.subText}>تتحدث تلقائياً حسب نشاطك والفترة الزمنية.</Text>
      </View>

      {/* قسم أسرار النجاح الرئيسي */}
      <Text style={styles.sectionTitle}>⭐ أسرار النجاح</Text>
      <Text style={styles.subTextDesc}>إحصائيات أداءك لمساعدة على جذب الطلاب وتطوير العمل.</Text>

      <View style={styles.infoCardItem}>
        <Text style={styles.infoCardTitle}>دروس أعدت جدولتها</Text>
        <Text style={styles.infoCardValue}>--</Text>
        <Text style={styles.subText}>اطمح إلى أقل من 10%</Text>
      </View>

      <View style={styles.infoCardItem}>
        <Text style={styles.infoCardTitle}>دروس ألغيتها</Text>
        <Text style={styles.infoCardValue}>--</Text>
        <Text style={styles.subText}>اطمح إلى أقل من 5%</Text>
      </View>

      <View style={styles.infoCardItem}>
        <Text style={styles.infoCardTitle}>إجمالي الدروس التي تغيبت عنها</Text>
        <Text style={styles.infoCardValue}>--</Text>
        <Text style={styles.subText}>اطمح إلى 0</Text>
      </View>

      <View style={styles.infoCardItem}>
        <Text style={styles.infoCardTitle}>الدروس الأسبوعية</Text>
        <Text style={styles.infoCardValue}>--</Text>
        <Text style={styles.subText}>اطمح إلى أكثر من 75%</Text>
      </View>

      <View style={styles.infoCardItem}>
        <Text style={styles.infoCardTitle}>الدروس فى صف Preply</Text>
        <Text style={styles.infoCardValue}>--</Text>
        <Text style={styles.subText}>اطمح إلى أكثر من 75%</Text>
      </View>

      <View style={styles.infoCardItem}>
        <Text style={styles.infoCardTitle}>إجابات خلال 24 ساعة</Text>
        <Text style={styles.infoCardValue}>--</Text>
        <Text style={styles.subText}>اطمح إلى أكثر من 90%</Text>
      </View>

      <View style={styles.infoCardItem}>
        <Text style={styles.infoCardTitle}>المراسلة بعد الدرس التجريبي</Text>
        <Text style={styles.infoCardValue}>--</Text>
        <Text style={styles.subText}>اطمح إلى أكثر من 90%</Text>
      </View>

      <View style={styles.infoCardItem}>
        <Text style={styles.infoCardTitle}>المواعيد الأكثر طلبًا</Text>
        <Text style={styles.infoCardValue}>--</Text>
        <Text style={styles.subText}>اطمح إلى أكثر من 80 موعداً</Text>
      </View>

      <View style={styles.infoCardItem}>
        <Text style={styles.infoCardTitle}>معدل التقييمات</Text>
        <Text style={styles.infoCardValue}>--</Text>
        <Text style={styles.subText}>اطمح إلى أكثر من 4.8</Text>
      </View>

      <View style={styles.infoCardItem}>
        <Text style={styles.infoCardTitle}>نتيجه الملف الشخصي</Text>
        <Text style={styles.infoCardValue}>--</Text>
        <Text style={styles.subText}>اطمح إلى أكثر من 90%</Text>
      </View>

      <View style={styles.infoCardItem}>
        <Text style={styles.infoCardTitle}>السعر للدرس</Text>
        <Text style={styles.infoCardValue}>--</Text>
      </View>

      {/* قسم اشتراكات جديدة والنشاط الثلاثي */}
      <Text style={styles.sectionTitle}>📈 اشتراكات جديدة</Text>
      <View style={styles.tripleStatsRow}>
        <View style={styles.tripleStatItem}>
          <Text style={styles.tripleLabel}>اشتراكات جديدة</Text>
          <Text style={styles.tripleVal}>--</Text>
        </View>
        <View style={styles.tripleStatItem}>
          <Text style={styles.tripleLabel}>دروس تجريبية</Text>
          <Text style={styles.tripleVal}>--</Text>
        </View>
        <View style={styles.tripleStatItem}>
          <Text style={styles.tripleLabel}>مشاهدة ملفك</Text>
          <Text style={styles.tripleVal}>--</Text>
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
        <Text style={styles.infoCardValue}>--</Text>
        <Text style={styles.subText}>ساعة تعليم تتحدث تلقائياً مع تقدمك على المنصة.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentArea: { padding: 10, backgroundColor: '#fff' },
  mainHeader: { fontSize: 18, fontWeight: 'bold', marginBottom: 6, color: '#222' },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginTop: 18, marginBottom: 8, color: '#222' },
  subTextDesc: { fontSize: 12, color: '#666', marginBottom: 12 },
  dateFilterBox: { backgroundColor: '#eef2ff', padding: 8, borderRadius: 6, alignSelf: 'flex-start', marginBottom: 12 },
  dateFilterText: { fontSize: 12, fontWeight: 'bold', color: '#1e40af' },
  infoCardItem: { backgroundColor: '#fafafa', padding: 12, borderRadius: 8, borderWidth: 1, borderColor: '#e5e7eb', marginBottom: 10 },
  infoCardTitle: { fontSize: 13, fontWeight: 'bold', color: '#333', marginBottom: 4 },
  infoCardValue: { fontSize: 18, fontWeight: 'bold', color: '#007AFF', marginBottom: 4 },
  subText: { fontSize: 11, color: '#666' },
  tripleStatsRow: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fafafa', borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 8, padding: 10, marginBottom: 10 },
  tripleStatItem: { flex: 1, alignItems: 'center' },
  tripleLabel: { fontSize: 11, color: '#666', textAlign: 'center', marginBottom: 4 },
  tripleVal: { fontSize: 15, fontWeight: 'bold', color: '#007AFF' },
  badgeBox: { backgroundColor: '#f0fdf4', padding: 14, borderRadius: 8, borderWidth: 1, borderColor: '#bbf7d0', marginBottom: 12 },
  badgeMainTitle: { fontSize: 15, fontWeight: 'bold', color: '#166534', marginBottom: 6 },
  badgeText: { fontSize: 12, color: '#15803d', lineHeight: 18 }
});
