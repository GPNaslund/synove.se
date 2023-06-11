import BusinessWorkoutIntroPage from "@/components/business_workout_intro/business_workout_intro_page";
import Presentation from "@/components/presentation/presentation";
import RecoveryRoomInfo from "@/components/recovery_room/recovery_room_info";
import ServiceIntroPage from "@/components/services_intro/service_intro_page";

export default function HomePage() {
  return (
    <div>
      <Presentation />
      <ServiceIntroPage />
      <BusinessWorkoutIntroPage />
      <RecoveryRoomInfo />
    </div>
  )
}
