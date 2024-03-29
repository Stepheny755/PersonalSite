import React from 'react'

import { motion, AnimatePresence } from 'framer-motion'

class Card extends React.Component{
  constructor(props){
    super(props);
    this.state={
      expanded: false,
    }
    this.toggleExpanded = this.toggleExpanded.bind(this);
  }
  toggleExpanded(){
    this.setState({ expanded:!this.state.expanded, });
  }
  render(){
    const card_variants={
      open: { opacity: 1, height: "auto" },
      collapsed: { opacity: 0, height: 0 }
    }
    return (
      <div className = "b accordion" onClick={() => this.toggleExpanded()}>
        <div class="card_title">{this.props.title}</div>
        <AnimatePresence>
          {this.state.expanded && (
            <motion.section
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={card_variants}
              transition={{ duration: 0.1}}//, //ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <div>
              {this.props.subtitle}
              {this.props.content}
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    );
  }
}

export default Card
