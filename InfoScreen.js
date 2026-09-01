import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function InfoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.contentArea}>
      {/* نظرة عامة */}
      <Text style={styles.mainHeader}>معلومات</Text>
      <Text style={styles.sectionHeaderTitle}>نظرة عامة</Text>
      <Text style={styles.subTextDesc}>لمحة حول نشاطك.</Text>
      <View style={styles.dateFilterBox}>
        <Text style={styles.dateFilterText}>📅 90 يوم ▼</Text>
      </View>

      {/* بطاقة مكاسب */}
      <View style={styles.infoCardBox}>
        <Text style={styles.cardTitleText}>مكاسب</Text>
        <Text style={styles.statLargeNum}>$761</Text>
        <Text style={styles.redDeclineText}>📉 18%</Text>
        <Text style={styles.dateRangeText}>بيانات من 3 يونيو - 1 سبتمبر، مقارنة مع 4 مارس - 2 يونيو.</Text>
      </View>

      {/* أسرار النجاح */}
      <Text style={styles.sectionHeaderTitle}>أسرار النجاح</Text>
      <Text style={styles.subTextDesc}>هذه الإحصائيات مصممة لمساعدتك على تطوير عملك، جذب الطلاب الجدد والحفاظ على تفاعلهم.</Text>
      
      <View style={styles.dateFilterBox}>
        <Text style={styles.dateFilterText}>📅 90 يوم ▼</Text>
      </View>

      <View style={styles.infoCardBox}>
        <Text style={styles.cardTitleText}>دروس أعدت جدولتها</Text>
        <Text style={styles.cardSubText}>اطمح إلى أقل من 10%</Text>
        <View style={styles.badgeBoxLive}><Text style={styles.liveBadgeText}>✓</Text></View>
        <Text style={styles.statLargeNum}>0%</Text>
      </View>

      <View style={styles.infoCardBox}>
        <Text style={styles.cardTitleText}>دروس ألغيتها</Text>
        <Text style={styles.cardSubText}>اطمح إلى أقل من 5%</Text>
        <View style={styles.badgeBoxLive}><Text style={styles.liveBadgeText}>✓</Text></View>
        <Text style={styles.statLargeNum}>0%</Text>
      </View>

      <View style={styles.infoCardBox}>
        <Text style={styles.cardTitleText}>إجمالي الدروس التي تغيبت عنها</Text>
        <Text style={styles.cardSubText}>اطمح إلى 0</Text>
        <View style={styles.badgeBoxLive}><Text style={styles.liveBadgeText}>✓</Text></View>
        <Text style={styles.statLargeNum}>0</Text>
      </View>

      <View style={styles.infoCardBox}>
        <Text style={styles.cardTitleText}>الدروس الأسبوعية</Text>
        <Text style={styles.cardSubText}>اطمح إلى أكثر من 75%</Text>
        <Text style={styles.statLargeNum}>59%</Text>
      </View>

      <View style={styles.infoCardBox}>
        <Text style={styles.cardTitleText}>الدروس فى صف Preply</Text>
        <Text style={styles.cardSubText}>اطمح إلى أكثر من 75%</Text>
        <View style={styles.badgeBoxLive}><Text style={styles.liveBadgeText}>✓</Text></View>
        <Text style={styles.statLargeNum}>97%</Text>
      </View>

      <View style={styles.infoCardBox}>
        <Text style={styles.cardTitleText}>إجابات خلال 24 ساعة</Text>
        <Text style={styles.cardSubText}>اطمح إلى أكثر من 90%</Text>
        <View style={styles.badgeBoxLive}><Text style={styles.liveBadgeText}>✓</Text></View>
        <Text style={styles.statLargeNum}>100%</Text>
      </View>

      <View style={styles.infoCardBox}>
        <Text style={styles.cardTitleText}>المراسلة بعد الدرس التجريبي</Text>
        <Text style={styles.cardSubText}>اطمح إلى أكثر من 90%</Text>
        <View style={styles.badgeBoxLive}><Text style={styles.liveBadgeText}>✓</Text></View>
        <Text style={styles.statLargeNum}>100%</Text>
      </View>

      <Text style={styles.dateRangeText}>بيانات من 3 يونيو - 1 سبتمبر.</Text>

      <View style={styles.badgeBoxLive}>
        <Text style={styles.liveBadgeText}>مباشر</Text>
      </View>

      <View style={styles.infoCardBox}>
        <Text style={styles.cardTitleText}>المواعيد الأكثر طلبًا</Text>
        <Text style={styles.cardSubText}>Aim for more than 80 slots</Text>
        <View style={styles.badgeBoxLive}><Text style={styles.liveBadgeText}>✓</Text></View>
        <Text style={styles.statLargeNum}>157</Text>
      </View>

      <View style={styles.infoCardBox}>
        <Text style={styles.cardTitleText}>معدل التقييمات</Text>
        <Text style={styles.cardSubText}>اطمح إلى أكثر من 4.8</Text>
        <View style={styles.badgeBoxLive}><Text style={styles.liveBadgeText}>✓</Text></View>
        <Text style={styles.statLargeNum}>5.0</Text>
      </View>

      <View style={styles.infoCardBox}>
        <Text style={styles.cardTitleText}>نتيجه الملف</Text>
        <Text style={styles.cardSubText}>اطمح إلى أكثر من 90%</Text>
        <View style={styles.badgeBoxLive}><Text style={styles.liveBadgeText}>✓</Text></View>
        <Text style={styles.statLargeNum}>100%</Text>
      </View>

      <View style={styles.infoCardBox}>
        <Text style={styles.cardTitleText}>السعر للدرس</Text>
        <Text style={styles.statLargeNum}>$28</Text>
      </View>

      <Text style={styles.dateRangeText}>النتائج المباشرة المحدثة 1 سبتمبر، 6:36 ص.</Text>

      {/* اشتراكات جديدة */}
      <Text style={styles.sectionHeaderTitle}>اشتراكات جديدة</Text>
      <Text style={styles.subTextDesc}>شاهد عدد الطلاب الذين أخذوا خطوة إضافية بعد مشاهدة ملفك الشخصي أو إكمال درس تجريبي معك.</Text>
      
      <View style={styles.dateFilterBox}>
        <Text style={styles.dateFilterText}>📅 90 يوم ▼</Text>
      </View>

      <View style={styles.tripleStatsRow}>
        <View style={styles.tripleStatItem}>
          <Text style={styles.tripleLabel}>اشتراكات جديد</Text>
          <Text style={styles.tripleVal}>2</Text>
        </View>
        <View style={styles.tripleStatItem}>
          <Text style={styles.tripleLabel}>درس تجريبية</Text>
          <Text style={styles.tripleVal}>2</Text>
        </View>
        <View style={styles.tripleStatItem}>
          <Text style={styles.tripleLabel}>مشاهدة ملفك</Text>
          <Text style={styles.tripleVal}>493</Text>
        </View>
      </View>

      <View style={styles.infoCardBox}>
        <Text style={styles.cardTitleText}>معدل مركز ملفك</Text>
        <View style={styles.badgeBoxLive}><Text style={styles.liveBadgeText}>مباشر</Text></View>
        <Text style={styles.statLargeNum}>636</Text>
      </View>

      <View style={styles.infoCardBox}>
        <Text style={styles.cardTitleText}>خذ درس تجريبي</Text>
        <Text style={styles.statLargeNum}>0.4%</Text>
        <Text style={styles.redDeclineText}>📉 99.3%</Text>
      </View>

      <View style={styles.infoCardBox}>
        <Text style={styles.cardTitleText}>اشترك بعد الدرس التجريبي</Text>
        <Text style={styles.statLargeNum}>100%</Text>
        <Text style={styles.greenRiseText}>📈 100%</Text>
      </View>

      <Text style={styles.dateRangeText}>بيانات من 3 يونيو - 1 سبتمبر، مقارنة مع 4 مارس - 2 يونيو. النتائج المباشرة المحدثة 1 سبتمبر، 6:36 ص.</Text>

      {/* بطاقة التقييم الممتاز */}
      <View style={styles.excellentTeacherCard}>
        <Text style={styles.badgeScoreNum}>9/9</Text>
        <Text style={styles.excellentTitle}>أنت مدرس ممتاز!</Text>
        <Text style={styles.excellentBodyText}>
          تهانينا بصفتك مدرسًا ممتازًا، ستصل إلى المزيد من الطلاب مع زيادة ظهورك في نتائج البحث، وستحظى بالمزيد من فرص حجز الدروس التجريبية. وإذا قد انضممت إلى برنامج مدرّسي الشركات، فستظهر أيضًا للطلاب من الشركات الباحثين عن مدرّس.
        </Text>
      </View>

      {/* مسيرتك في Preply */}
      <Text style={styles.sectionHeaderTitle}>مسيرتك فى Preply</Text>
      <Text style={styles.subTextDesc}>شاهد ما حققته منذ بداية مسيرتك فى يونيو 2023.</Text>
      
      <View style={styles.dateFilterBox}>
        <Text style={styles.dateFilterText}>📅 منذ الانضمام ▼</Text>
      </View>

      <View style={styles.infoCardBox}>
        <Text style={styles.cardTitleText}>المدخول المكتسب</Text>
        <Text style={styles.statLargeNum}>-</Text>
      </View>

      <View style={styles.infoCardBox}>
        <Text style={styles.cardTitleText}>ساعة تعليم</Text>
        <Text style={styles.statLargeNum}>2640.5</Text>
        <Text style={styles.dateRangeText}>البيانات المعروضة من 23 يونيو 2023 - 1 سبتمبر 2026.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentArea: { padding: 12 },
  mainHeader: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: '#111' },
  sectionHeaderTitle: { fontSize: 20, fontWeight: 'bold', marginTop: 15, marginBottom: 6, color: '#111' },
  subTextDesc: { fontSize: 13, color: '#666', marginBottom: 10 },
  dateFilterBox: { backgroundColor: '#eef2ff', padding: 8, borderRadius: 6, alignSelf: 'flex-start', marginBottom: 10 },
  dateFilterText: { fontSize: 13, fontWeight: 'bold', color: '#1e40af' },
  infoCardBox: { backgroundColor: '#fafafa', padding: 14, borderRadius: 8, borderWidth: 1, borderColor: '#e5e7eb', marginBottom: 10 },
  cardTitleText: { fontSize: 15, fontWeight: 'bold', color: '#333', marginBottom: 4 },
  cardSubText: { fontSize: 12, color: '#666', marginBottom: 6 },
  statLargeNum: { fontSize: 22, fontWeight: 'bold', color: '#111' },
  redDeclineText: { color: '#b91c1c', fontSize: 13, fontWeight: 'bold', marginTop: 4 },
  greenRiseText: { color: '#10b981', fontSize: 13, fontWeight: 'bold', marginTop: 4 },
  dateRangeText: { fontSize: 11, color: '#666', marginBottom: 10, marginTop: 4 },
  badgeBoxLive: { backgroundColor: '#dbeafe', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 4, alignSelf: 'flex-start', marginBottom: 6 },
  liveBadgeText: { fontSize: 11, fontWeight: 'bold', color: '#1e40af' },
  tripleStatsRow: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fafafa', borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 8, padding: 10, marginBottom: 10 },
  tripleStatItem: { flex: 1, alignItems: 'center' },
  tripleLabel: { fontSize: 11, color: '#666', textAlign: 'center', marginBottom: 4 },
  tripleVal: { fontSize: 16, fontWeight: 'bold', color: '#111' },
  excellentTeacherCard: { backgroundColor: '#fdf2f8', borderWidth: 1, borderColor: '#fbcfe8', padding: 15, borderRadius: 10, marginBottom: 15, alignItems: 'center' },
  badgeScoreNum: { fontSize: 24, fontWeight: 'bold', color: '#db2777', marginBottom: 6 },
  excellentTitle: { fontSize: 18, fontWeight: 'bold', color: '#111', marginBottom: 8 },
  excellentBodyText: { fontSize: 13, color: '#4b5563', textAlign: 'center', lineHeight: 20 },
});
