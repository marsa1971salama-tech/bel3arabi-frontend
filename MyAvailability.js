import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Switch, TouchableOpacity } from 'react-native';

export default function MyAvailability() {
  const [selectedTimeZone, setSelectedTimeZone] = useState('(GMT+3) - القاهرة، مصر');
  const [days, setDays] = useState({
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: true,
    sunday: true,
  });

  const toggleDay = (day) => {
    setDays({ ...days, [day]: !days[day] });
  };

  const renderDaySection = (dayName, dayKey) => (
    <View style={styles.dayContainer} key={dayKey}>
      <View style={styles.dayHeader}>
        <Text style={styles.dayText}>{dayName}</Text>
        <Switch
          value={days[dayKey]}
          onValueChange={() => toggleDay(dayKey)}
          trackColor={{ false: "#d1d5db", true: "#3b82f6" }}
          thumbColor={days[dayKey] ? "#ffffff" : "#f4f3f4"}
        />
      </View>
      {days[dayKey] && (
        <View style={styles.timeIntervalsContainer}>
          <View style={styles.timeRow}>
            <View style={styles.timeBox}><Text style={styles.timeText}>09:00</Text></View>
            <Text style={styles.toText}>إلى</Text>
            <View style={styles.timeBox}><Text style={styles.timeText}>17:00</Text></View>
          </View>
        </View>
      )}
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.mainTitle}>⏰ إعدادات التوفر والمنطقة الزمنية</Text>
      
      {/* قسم المنطقة الزمنية */}
      <View style={styles.sectionCard}>
        <Text style={styles.label}>المنطقة الزمنية:</Text>
        <View style={styles.selectBox}>
          <Text style={styles.selectText}>{selectedTimeZone}</Text>
        </View>
      </View>

      {/* قسم إشعارات الحجز */}
      <View style={styles.sectionCard}>
        <Text style={styles.label}>مدة إشعار الدرس التجريبي:</Text>
        <View style={styles.selectBox}>
          <Text style={styles.selectText}>إشعار بمدة 12 ساعة على الأقل</Text>
        </View>
      </View>

      <View style={styles.sectionCard}>
        <Text style={styles.label}>مدة إشعار الدروس الاعتيادية:</Text>
        <View style={styles.selectBox}>
          <Text style={styles.selectText}>إشعار بمدة 6 ساعات على الأقل</Text>
        </View>
      </View>

      {/* الأيام والجدول */}
      <Text style={styles.subHeader}>أيام العمل والجدول الزمني أسبوعياً:</Text>
      {renderDaySection('الاثنين', 'monday')}
      {renderDaySection('الثلاثاء', 'tuesday')}
      {renderDaySection('الأربعاء', 'wednesday')}
      {renderDaySection('الخميس', 'thursday')}
      {renderDaySection('الجمعة', 'friday')}
      {renderDaySection('السبت', 'saturday')}
      {renderDaySection('الأحد', 'sunday')}

      <TouchableOpacity style={styles.saveButton} onPress={() => alert('تم حفظ إعدادات التوفر بنجاح!')}>
        <Text style={styles.saveButtonText}>حفظ التغييرات</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#f9fafb', flexGrow: 1 },
  mainTitle: { fontSize: 18, fontWeight: 'bold', color: '#1f2937', marginBottom: 16, textAlign: 'center' },
  sectionCard: { backgroundColor: '#fff', padding: 12, borderRadius: 8, marginBottom: 12, borderWidth: 1, borderColor: '#e5e7eb' },
  label: { fontSize: 13, fontWeight: 'bold', color: '#4b5563', marginBottom: 6 },
  selectBox: { padding: 10, backgroundColor: '#f3f4f6', borderRadius: 6, borderWidth: 1, borderColor: '#d1d5db' },
  selectText: { color: '#2563eb', fontWeight: 'bold', fontSize: 13 },
  subHeader: { fontSize: 15, fontWeight: 'bold', color: '#1f2937', marginTop: 10, marginBottom: 10 },
  dayContainer: { backgroundColor: '#fff', padding: 12, borderRadius: 8, marginBottom: 10, borderWidth: 1, borderColor: '#e5e7eb' },
  dayHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  dayText: { fontSize: 15, fontWeight: 'bold', color: '#1f2937' },
  timeIntervalsContainer: { marginTop: 10, paddingTop: 10, borderTopWidth: 1, borderTopColor: '#f3f4f6' },
  timeRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  timeBox: { flex: 1, padding: 8, backgroundColor: '#f9fafb', borderRadius: 6, borderWidth: 1, borderColor: '#e5e7eb', alignItems: 'center' },
  timeText: { fontSize: 13, color: '#374151', fontWeight: 'bold' },
  toText: { marginHorizontal: 10, color: '#6b7280', fontSize: 12 },
  saveButton: { backgroundColor: '#2563eb', padding: 14, borderRadius: 8, alignItems: 'center', marginTop: 15, marginBottom: 30 },
  saveButtonText: { color: '#fff', fontSize: 15, fontWeight: 'bold' }
});
