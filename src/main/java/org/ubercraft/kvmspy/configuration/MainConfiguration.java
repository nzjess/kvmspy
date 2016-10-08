package org.ubercraft.kvmspy.configuration;

import java.util.concurrent.CompletionService;
import java.util.concurrent.ExecutorCompletionService;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.task.TaskExecutor;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

@Configuration
public class MainConfiguration {

    @Bean
    public TaskExecutor taskExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(3);
        executor.setMaxPoolSize(10);
        return executor;
    }

    @Bean
    public CompletionService completionService(TaskExecutor executor) {
        return new ExecutorCompletionService(executor);
    }
}
