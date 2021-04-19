import React from "react";

import Link from "next/link";
import Poster from "./Poster";
import PosterGrid from "./PosterGrid";
import { motion } from "framer-motion";
import { Container } from "./Elements";

export default function DisplayShows({ shows }) {
     return (
          <div>
               {shows && (
                    <Container>
                         <PosterGrid>
                              {shows.results.map((show, i) => (
                                   <Link href={`/show/${show.id}`} key={i}>
                                        <motion.div
                                             initial={{ y: 300 }}
                                             animate={{ y: 0 }}
                                             transition={{
                                                  duration: 0.5 + i * 0.2,
                                             }}
                                        >
                                             <motion.div
                                                  whileHover={{
                                                       scale: 1.05,
                                                  }}
                                                  whileTap={{
                                                       scale: 1.03,
                                                  }}
                                             >
                                                  <Poster data={show} />
                                             </motion.div>
                                        </motion.div>
                                   </Link>
                              ))}
                         </PosterGrid>
                    </Container>
               )}
          </div>
     );
}
