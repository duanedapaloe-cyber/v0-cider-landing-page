import { Button } from "@/components/ui/button"

export default function CiderReviewerPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#f5f5f5] px-6 py-16 text-center md:px-12 md:py-24">
        <h1 className="mb-6 text-4xl font-bold leading-tight text-balance md:text-6xl lg:text-7xl">
          Become a <span className="block">CIDER Product</span>
          <span className="block">Reviewer</span>
        </h1>
        <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Get paid to review the finest ciders and help shape the future of craft beverage shopping
        </p>
        <Button
          size="lg"
          className="h-14 rounded-full bg-black px-12 text-lg font-medium text-white hover:bg-black/90"
          asChild
        >
          <a href="https://glctrk.org/aff_c?offer_id=332&aff_id=115643" target="_blank" rel="noopener noreferrer">
            Apply Now
          </a>
        </Button>
      </section>

      {/* Program Benefits Header */}
      <section className="bg-white px-6 py-16 text-center md:px-12">
        <h2 className="mb-4 text-4xl font-bold md:text-5xl">Program Benefits</h2>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Join our exclusive reviewer program and enjoy these amazing perks
        </p>
      </section>

      {/* How It Works Section */}
      <section className="bg-white px-6 py-16 md:px-12">
        <h2 className="mb-12 text-center text-4xl font-bold md:text-5xl">How It Works</h2>

        <div className="mx-auto max-w-4xl space-y-12">
          {/* Step 1 */}
          <div className="flex gap-6 md:gap-8">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-[#ff4d6d] md:h-20 md:w-20">
              <span className="text-3xl font-bold text-white md:text-4xl">1</span>
            </div>
            <div className="pt-2">
              <h3 className="mb-3 text-2xl font-bold md:text-3xl">Apply</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Fill out our simple application form and tell us about your cider preferences and tasting experience.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-6 md:gap-8">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-[#ff4d6d] md:h-20 md:w-20">
              <span className="text-3xl font-bold text-white md:text-4xl">2</span>
            </div>
            <div className="pt-2">
              <h3 className="mb-3 text-2xl font-bold md:text-3xl">Get Selected</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Our team reviews applications and sends out acceptance mail or sms to notify you that you've been
                selected.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-6 md:gap-8">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-[#ff4d6d] md:h-20 md:w-20">
              <span className="text-3xl font-bold text-white md:text-4xl">3</span>
            </div>
            <div className="pt-2">
              <h3 className="mb-3 text-2xl font-bold md:text-3xl">Receive Products</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Selected reviewers receive CIDER products delivered directly to their doorstep.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-6 md:gap-8">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-[#ff4d6d] md:h-20 md:w-20">
              <span className="text-3xl font-bold text-white md:text-4xl">4</span>
            </div>
            <div className="pt-2">
              <h3 className="mb-3 text-2xl font-bold md:text-3xl">Create Reviews</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Test products and create honest, detailed reviews about taste, quality, aroma, and overall experience.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex gap-6 md:gap-8">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-[#ff4d6d] md:h-20 md:w-20">
              <span className="text-3xl font-bold text-white md:text-4xl">5</span>
            </div>
            <div className="pt-2">
              <h3 className="mb-3 text-2xl font-bold md:text-3xl">Get Paid</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Earn rewards for your reviews and continue to receive new ciders monthly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="bg-[#f5f5f5] px-6 py-16 md:px-12">
        <h2 className="mb-12 text-center text-4xl font-bold md:text-5xl">Why Join Our Program?</h2>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:gap-8">
          <div className="rounded-2xl bg-white p-8">
            <h3 className="mb-4 text-2xl font-bold">Build Your Portfolio</h3>
            <p className="leading-relaxed text-muted-foreground">
              Create professional beverage content that can help build your personal brand.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8">
            <h3 className="mb-4 text-2xl font-bold">Exclusive Community</h3>
            <p className="leading-relaxed text-muted-foreground">
              Join a network of cider enthusiasts and industry professionals.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8">
            <h3 className="mb-4 text-2xl font-bold">Flexible Schedule</h3>
            <p className="leading-relaxed text-muted-foreground">
              Review products on your own time with no strict deadlines.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8">
            <h3 className="mb-4 text-2xl font-bold">Influence Products</h3>
            <p className="leading-relaxed text-muted-foreground">
              Your feedback directly impacts future product development.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-white px-6 py-16 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-6 rounded-2xl bg-[#f5f5f5] p-8">
            <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-[#ff4d6d]">
              <span className="text-3xl font-bold text-white">O</span>
            </div>
            <div>
              <h3 className="mb-1 text-xl font-bold">Olivia M.</h3>
              <p className="text-muted-foreground">Content Creator</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#ff4d6d] px-6 py-20 text-center text-white md:px-12 md:py-28">
        <h2 className="mb-6 text-4xl font-bold md:text-5xl">Ready to Join?</h2>
        <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed md:text-xl">
          Apply today and start receiving free cider products while earning money for your honest reviews
        </p>
        <Button
          size="lg"
          className="h-14 rounded-full bg-white px-12 text-lg font-medium text-[#ff4d6d] hover:bg-white/95"
          asChild
        >
          <a href="https://glctrk.org/aff_c?offer_id=332&aff_id=115643" target="_blank" rel="noopener noreferrer">
            Apply Now
          </a>
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-black px-6 py-12 text-white md:px-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-4 text-3xl font-bold">
            <span className="text-[#ff4d6d]">CIDER</span>Review
          </h3>
          <p className="mb-8 max-w-2xl leading-relaxed text-gray-400">
            Join our community of cider enthusiasts and help shape the future of craft beverage shopping
          </p>
          <div>
            <h4 className="mb-4 text-xl font-bold">Links</h4>
          </div>
        </div>
      </footer>
    </main>
  )
}
