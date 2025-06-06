import MailCannonForm from "@/components/mail-cannon-form";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen py-8 px-4 bg-background">
      <Header />
      <main className="w-full max-w-2xl mt-8">
        <MailCannonForm />
      </main>
      <footer className="mt-12 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Trust Sender. Blast off your messages!</p>
      </footer>
    </div>
  );
}
