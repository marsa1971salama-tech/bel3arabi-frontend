import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Switch, TouchableOpacity } from 'react-native';

export default function AvailabilityScreen() {
  const [selectedTimeZone, setSelectedTimeZone] = useState('20:47 (GMT+3) - Africa, Cairo');
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
        />
      </View>
      {days[dayKey] && (
        <View style={styles.timeSlotsContainer}>
          <View style={styles.timeRow}>
            <View style={styles.timeBox}><Text>00:00</Text></View>
            <Text>إلى</Text>
            <View style={styles.timeBox}><Text>03:00</Text></View>
          </View>
          <View style={styles.timeRow}>
            <View style={styles.timeBox}><Text>06:00</Text></View>
            <Text>إلى</Text>
            <View style={styles.timeBox}><Text>24:00</Text></View>
          </View>
          <TouchableOpacity>
            <Text style={styles.addSlotText}>إضافة موعد</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>إعدادات التوفر والمنطقة الزمنية</Text>
      
      {/* قسم المنطقة الزمنية */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>تحديد المنطقة الزمنية الخاصة بك</Text>
        <Text style={styles.sectionSubtitle}>المنطقة الزمنية الصحيحة أساسية لجدولة الدروس مع الطلاب الدوليين</Text>
        <Text style={styles.label}>اختر المنطقة الزمنية</Text>
        <View style={styles.dropdownBox}>
          <Text style={styles.dropdownText}>{selectedTimeZone}</Text>
        </View>
      </View>

      {/* قسم تحديد التوفر */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>تحديد توفرك</Text>
        <Text style={styles.sectionSubtitle}>التوفر يظهر ساعات العمل المحتملة. يمكن للطلاب حجز دروس في هذه الأوقات.</Text>
        
        {renderDaySection('الإثنين', 'monday')}
        {renderDaySection('الثلاثاء', 'tuesday')}
        {renderDaySection('الأربعاء', 'wednesday')}
        {renderDaySection('الخميس', 'thursday')}
        {renderDaySection('الجمعة', 'friday')}
        {renderDaySection('السبت', 'saturday')}
        {renderDaySection('الأحد', 'sunday')}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'right',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'right',
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
    textAlign: 'right',
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    textAlign: 'right',
  },
  dropdownBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#f9f9f9',
  },
  dropdownText: {
    fontSize: 14,
    textAlign: 'right',
  },
  dayContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 15,
  },
  dayHeader: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  dayText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  timeSlotsContainer: {
    backgroundColor: '#fcfcfc',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  timeRow: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  timeBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 8,
    width: '40%',
    alignItems: 'center',
  },
  addSlotText: {
    color: '#007AFF',
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'right',
  }
});
