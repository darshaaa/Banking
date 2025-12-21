import Sidebar from './components/Sidebar';
import DashboardContent from './components/DashboardContent';

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <DashboardContent />
    </main>
  );
}