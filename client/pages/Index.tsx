import { useEffect } from "react";
import GlowButton from "@/components/GlowButton";
import FeatureCard from "@/components/FeatureCard";
import {
  Globe2,
  Gift,
  Infinity,
  Share2,
  Shuffle,
  Smartphone,
  Wifi,
  Shield,
} from "lucide-react";

export default function Index() {
  useEffect(() => {
    // noop, reserved for future analytics hooks
  }, []);

  return (
    <main>
      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_-10%,hsl(var(--primary)/0.25),transparent_70%)]" />
        <div className="container pt-6 pb-12 md:pt-10 md:pb-24 grid md:grid-cols-2 gap-6 md:gap-10 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://i.ibb.co/rKHZQ6Wn/esim4lifelogo.png"
                alt="esim4life logo mark"
                className="h-[64px] w-[64px] md:h-[96px] md:w-[96px] rounded-md"
              />
              <span className="text-sm font-bold text-primary tracking-wide">
                Trusted. Innovative. Simple.
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tighter">
              Your Lifetime eSIM&nbsp;&nbsp;
              <span className="text-gradient">Unlimited Data, Zero Expiry</span>
            </h1>
            <p className="mt-5 text-base md:text-lg text-foreground/85 max-w-xl leading-relaxed font-medium">
              esim4life.shop provides an international data eSIM that never
              expires. Permanent data and account validity across multiple
              countries, including Pakistan. Compatible with both PTA and
              non-PTA phones.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="chip">No Expiry</span>
              <span className="chip">Free Data</span>
              <span className="chip">4G & 5G Worldwide</span>
            </div>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full max-w-xl">
              <GlowButton
                href="https://wa.me/message/4S3NPHUQR663C1"
                label="Buy via WhatsApp"
                icon="https://i.ibb.co/Q2YSt4V/whatsapp.png"
                className="w-full sm:w-auto"
              />
              <GlowButton
                href="https://t.me/esim4lifechatbot"
                label="Buy via Telegram"
                icon="https://i.ibb.co/8gxkpRSv/telegram-1.png"
                className="from-[#1C9CEA] to-[#1C9CEA]/90 w-full sm:w-auto"
              />
            </div>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="mb-6 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.05] tracking-tight text-primary">
                Only 999 PKR
              </h2>
              <p className="mt-1 text-base md:text-lg font-semibold text-foreground/85">
                Lifetime eSIM • Unlimited Data • Zero Expiry
              </p>
            </div>
            <div className="mx-auto w-full max-w-md md:max-w-lg">
              <div className="grid grid-cols-2 gap-4 h-full items-stretch">
                <div className="stat">
                  <Wifi className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                  <span className="stat-label">Global Data</span>
                  <span className="stat-value">4G/5G</span>
                </div>
                <div className="stat">
                  <Infinity className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                  <span className="stat-label">Validity</span>
                  <span className="stat-value">Never Expires</span>
                </div>
                <div className="stat">
                  <Globe2 className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                  <span className="stat-label">Countries</span>
                  <span className="stat-value">International</span>
                </div>
                <div className="stat">
                  <Shield className="h-7 w-7 md:h-8 md:w-8 text-primary" />
                  <span className="stat-label">Trust</span>
                  <span className="stat-value">Secure</span>
                </div>
              </div>
            </div>
            <div className="mt-6 p-5 rounded-lg border border-border/40 bg-foreground/2 w-full max-w-md md:max-w-lg text-center">
              <p className="text-lg md:text-xl font-black text-foreground leading-snug">
                Works on any
                <br />
                Non-PTA Phone
              </p>
              <p className="mt-2 text-sm md:text-base font-semibold text-foreground/75">
                No restrictions • Complete compatibility
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container py-12 md:py-20 lg:py-28">
        <div className="mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter">
            Everything you need, built in
          </h2>
          <p className="mt-3 text-foreground/80 max-w-2xl leading-relaxed font-medium">
            Global compatibility, lifetime data, referral rewards, and seamless
            device transfers, wrapped in a premium, minimal experience.
          </p>
        </div>
        <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          <FeatureCard
            title="Global Compatibility"
            description="Works across multiple countries including Pakistan. Reliable 4G & 5G worldwide performance."
            icon={<Globe2 />}
          />
          <FeatureCard
            title="Lifetime Validity"
            description="Your data and account never expire. Keep your eSIM active forever."
            icon={<Infinity />}
          />
          <FeatureCard
            title="Free Starter Data"
            description="Start with free data to get connected instantly."
            icon={<Gift />}
          />
          <FeatureCard
            title="Refer & Earn"
            description="Earn 500MB for every successful referral. Unlimited earning potential."
            icon={<Share2 />}
          />
          <FeatureCard
            title="Scratch Card Bonus"
            description="Unlock exclusive scratch cards after three referrals for surprise rewards."
            icon={<Shuffle />}
          />
          <FeatureCard
            title="Device Transfer"
            description="Transfer your eSIM between compatible devices with ease."
            icon={<Smartphone />}
          />
        </div>
      </section>

      {/* Buy */}
      <section id="buy" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_-10%,hsl(var(--primary)/0.22),transparent_70%)]" />
        <div className="container py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter">
              Buy Your eSIM Now
            </h2>
            <div className="mt-3">
              <span className="text-2xl md:text-3xl font-black text-primary">
                Only 999 PKR
              </span>
            </div>
            <p className="mt-5 text-foreground/80 font-medium leading-relaxed">
              Choose your preferred platform. We’ll guide you through a quick,
              secure setup.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
              <GlowButton
                href="https://wa.me/message/4S3NPHUQR663C1"
                label="Buy via WhatsApp (999 PKR)"
                icon="https://i.ibb.co/Q2YSt4V/whatsapp.png"
                className="w-full sm:w-auto"
              />
              <GlowButton
                href="https://t.me/esim4lifechatbot"
                label="Buy via Telegram (999 PKR)"
                icon="https://i.ibb.co/8gxkpRSv/telegram-1.png"
                className="from-[#1C9CEA] to-[#1C9CEA]/90 w-full sm:w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Refer & Earn */}
      <section id="refer" className="container py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter">
              Refer & Earn
            </h2>
            <p className="mt-3 text-foreground/80 font-medium leading-relaxed">
              Invite friends and earn 500MB per successful referral, with no
              limits. After three referrals, unlock a bonus scratch card with
              exclusive rewards.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="feature-mini">
                <Gift className="h-5 w-5" />
                <span>500MB per referral</span>
              </div>
              <div className="feature-mini">
                <Shuffle className="h-5 w-5" />
                <span>Scratch card after 3 referrals</span>
              </div>
              <div className="feature-mini">
                <Share2 className="h-5 w-5" />
                <span>Unlimited earning potential</span>
              </div>
              <div className="feature-mini">
                <Shield className="h-5 w-5" />
                <span>Secure and transparent</span>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-3xl border border-border/60 p-6 bg-card/60">
              <ol className="space-y-4 text-sm">
                <li className="step">Share your unique referral link.</li>
                <li className="step">
                  Your friend buys and activates an eSIM.
                </li>
                <li className="step">
                  You get 500MB instantly. Repeat to unlock scratch cards.
                </li>
              </ol>
              <div className="mt-6 flex gap-3">
                <a
                  href="https://wa.me/message/4S3NPHUQR663C1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Get my referral link (WhatsApp)
                </a>
                <a
                  href="https://t.me/esim4lifechatbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Get my referral link (Telegram)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section id="support" className="container py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter">
            Support
          </h2>
          <p className="mt-3 text-foreground/80 font-medium leading-relaxed">
            We’re here to help. Contact us anytime on WhatsApp or Telegram for
            quick assistance.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <GlowButton
              href="https://wa.me/message/4S3NPHUQR663C1"
              label="Chat on WhatsApp"
              icon="https://i.ibb.co/Q2YSt4V/whatsapp.png"
            />
            <GlowButton
              href="https://t.me/esim4lifechatbot"
              label="Chat on Telegram"
              icon="https://i.ibb.co/8gxkpRSv/telegram-1.png"
              className="from-[#1C9CEA] to-[#1C9CEA]/90"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
