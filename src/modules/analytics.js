import Analytics from 'analytics'
import segmentPlugin from '@analytics/segment'
 
const analytics = Analytics({
  app: process.env.REACT_APP_SEGMENT_APP,
  plugins: [
    segmentPlugin({
      writeKey: process.env.REACT_APP_SEGMENT_KEY
    })
  ]
})
  
export default analytics