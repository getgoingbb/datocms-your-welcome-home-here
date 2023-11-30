import Link from 'next/link'

export default function Header() {
  return (
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-R1TN5P38SJ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'GA_TRACKING_ID');
</script>  
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">Welcome Home</a>
      </Link>
      
    </h2>
  )
}
