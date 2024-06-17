import { useMemo } from 'react'
import { usePageData } from '@rspress/runtime'
import WidgetContainer from '@/widget/WidgetContainer'

const GoogleAdWidget = () => {
  const { siteData } = usePageData()

  const sidebarWidgetAd = useMemo(() => {
    if (!siteData?.themeConfig?.googleAds) {
      return false
    }
    if (!siteData?.themeConfig?.googleAds?.adSlot?.sidebarWidget) {
      return false
    }
    return {
      adClient: siteData.themeConfig.googleAds.adClient,
      adSlot: siteData.themeConfig.googleAds.adSlot.sidebarWidget,
    }
  }, [])

  return (
    <>
      {sidebarWidgetAd && (
        <WidgetContainer title="广告">
          {/* <GoogleAds
            dataAdClient={sidebarWidgetAd.adClient}
            dataAdSlot={sidebarWidgetAd.adSlot}
            dataAdFormat="auto"
            dataFullWidthResponsive="true"
          /> */}
        </WidgetContainer>
      )}
    </>
  )
}

export default GoogleAdWidget
